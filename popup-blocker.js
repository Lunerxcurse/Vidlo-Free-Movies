/**
 * Advanced Popup Blocker
 * Blocks ads that open in new tabs/windows
 * Compatible with modern web browsers
 */

class PopupBlocker {
    constructor() {
        this.blockedCount = 0;
        this.whitelist = new Set();
        this.init();
    }

    init() {
        this.blockWindowOpen();
        this.blockTargetBlank();
        this.blockPopunder();
        this.blockRedirects();
        this.preventFocusHijacking();
        this.setupEventListeners();
        console.log('🛡️ Popup Blocker initialized');
    }

    // Block window.open calls
    blockWindowOpen() {
        const originalOpen = window.open;
        const blocker = this;
        
        window.open = function(url, name, features, replace) {
            // Allow if user initiated (within 2 seconds of last user interaction)
            if (blocker.isUserInitiated()) {
                return originalOpen.call(window, url, name, features, replace);
            }
            
            // Allow whitelisted domains
            if (url && blocker.isWhitelisted(url)) {
                return originalOpen.call(window, url, name, features, replace);
            }
            
            blocker.blockedCount++;
            blocker.showBlockNotification(url || 'popup');
            console.log('🚫 Blocked popup:', url);
            
            // Return a mock window object to prevent errors
            return {
                closed: true,
                close: () => {},
                focus: () => {},
                blur: () => {},
                location: { href: '' },
                document: { write: () => {} }
            };
        };
    }

    // Block links with target="_blank" that are likely ads
    blockTargetBlank() {
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            if (!link) return;

            const target = link.getAttribute('target');
            const href = link.href;
            
            if (target === '_blank' && href) {
                // Check if it's likely an ad
                if (this.isLikelyAd(href) && !this.isUserInitiated()) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.blockedCount++;
                    this.showBlockNotification(href);
                    console.log('🚫 Blocked target="_blank" ad:', href);
                }
            }
        }, true);
    }

    // Block popunder attempts
    blockPopunder() {
        let originalBlur = window.blur;
        window.blur = function() {
            // Prevent automatic blur that's often used for popunders
            if (!this.isUserInitiated()) {
                console.log('🚫 Blocked popunder blur attempt');
                return;
            }
            return originalBlur.call(window);
        }.bind(this);

        // Block window.focus on new windows during page load
        let focusBlocked = false;
        window.addEventListener('load', () => {
            setTimeout(() => { focusBlocked = false; }, 3000);
            focusBlocked = true;
        });

        const originalFocus = window.focus;
        window.focus = function() {
            if (focusBlocked && !this.isUserInitiated()) {
                console.log('🚫 Blocked suspicious focus attempt');
                return;
            }
            return originalFocus.call(window);
        }.bind(this);
    }

    // Block automatic redirects
    blockRedirects() {
        let redirectBlocked = false;
        
        // Block location changes that happen too quickly after page load
        window.addEventListener('load', () => {
            redirectBlocked = true;
            setTimeout(() => { redirectBlocked = false; }, 2000);
        });

        const originalReplace = history.replaceState;
        history.replaceState = function(state, title, url) {
            if (redirectBlocked && !this.isUserInitiated()) {
                console.log('🚫 Blocked automatic redirect');
                return;
            }
            return originalReplace.call(history, state, title, url);
        }.bind(this);

        // Monitor location.href changes
        let currentHref = location.href;
        setInterval(() => {
            if (location.href !== currentHref) {
                if (redirectBlocked && !this.isUserInitiated()) {
                    console.log('🚫 Detected and blocked redirect to:', location.href);
                    history.back();
                }
                currentHref = location.href;
            }
        }, 100);
    }

    // Prevent focus hijacking
    preventFocusHijacking() {
        let suspiciousActivity = false;
        
        // Detect rapid focus changes
        let focusChangeCount = 0;
        window.addEventListener('focus', () => {
            focusChangeCount++;
            if (focusChangeCount > 3) {
                suspiciousActivity = true;
                setTimeout(() => { suspiciousActivity = false; }, 5000);
            }
        });

        // Reset counter periodically
        setInterval(() => { focusChangeCount = 0; }, 1000);
        
        // Block suspicious focus attempts
        const observer = new MutationObserver((mutations) => {
            if (suspiciousActivity) {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach((node) => {
                            if (node.tagName === 'IFRAME' || node.tagName === 'SCRIPT') {
                                if (this.isLikelyAd(node.src)) {
                                    node.remove();
                                    console.log('🚫 Removed suspicious element:', node.tagName);
                                }
                            }
                        });
                    }
                });
            }
        });
        
        observer.observe(document.body, { childList: true, subtree: true });
    }

    // Set up event listeners for user interaction tracking
    setupEventListeners() {
        this.lastUserInteraction = Date.now();
        
        const userEvents = ['click', 'keydown', 'mousedown', 'touchstart'];
        userEvents.forEach(eventType => {
            document.addEventListener(eventType, () => {
                this.lastUserInteraction = Date.now();
            }, { passive: true });
        });

        // Add keyboard shortcuts for managing the blocker
        document.addEventListener('keydown', (event) => {
            // Ctrl+Shift+P to toggle popup blocker
            if (event.ctrlKey && event.shiftKey && event.key === 'P') {
                this.toggle();
            }
            // Ctrl+Shift+B to show blocked count
            if (event.ctrlKey && event.shiftKey && event.key === 'B') {
                this.showStats();
            }
        });
    }

    // Check if action was user-initiated (within 2 seconds of last interaction)
    isUserInitiated() {
        return Date.now() - this.lastUserInteraction < 2000;
    }

    // Check if URL is whitelisted
    isWhitelisted(url) {
        try {
            const domain = new URL(url).hostname;
            return this.whitelist.has(domain);
        } catch {
            return false;
        }
    }

    // Check if URL is likely an ad
    isLikelyAd(url) {
        if (!url) return true;
        
        const adPatterns = [
            /doubleclick\.net/i,
            /googleadservices/i,
            /googlesyndication/i,
            /amazon-adsystem/i,
            /adsystem\.amazon/i,
            /facebook\.com\/tr/i,
            /analytics\.google/i,
            /googletagmanager/i,
            /outbrain\.com/i,
            /taboola\.com/i,
            /popads/i,
            /propellerads/i,
            /revcontent/i,
            /bidvertiser/i,
            /chitika/i,
            /infolinks/i,
            /adskeeper/i,
            /mgid/i,
            /ads\./i,
            /ad\./i,
            /popup/i,
            /banner/i,
            /affiliate/i,
            /redirect/i,
            /track/i,
            /pixel/i
        ];
        
        return adPatterns.some(pattern => pattern.test(url));
    }

    // Show notification when popup is blocked
    showBlockNotification(url) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc3545;
            color: white;
            padding: 12px 16px;
            border-radius: 6px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            z-index: 999999;
            opacity: 0;
            transition: opacity 0.3s ease;
            max-width: 300px;
            cursor: pointer;
        `;
        
        const domain = this.extractDomain(url);
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <span>🛡️</span>
                <span>Blocked popup</span>
                <span style="opacity: 0.8; font-size: 12px;">${domain}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.style.opacity = '1', 10);
        
        // Remove after 3 seconds or on click
        const removeNotification = () => {
            notification.style.opacity = '0';
            setTimeout(() => document.body.removeChild(notification), 300);
        };
        
        notification.addEventListener('click', removeNotification);
        setTimeout(removeNotification, 3000);
    }

    // Extract domain from URL for display
    extractDomain(url) {
        try {
            return new URL(url).hostname;
        } catch {
            return 'unknown';
        }
    }

    // Add domain to whitelist
    addToWhitelist(domain) {
        this.whitelist.add(domain);
        console.log('✅ Added to whitelist:', domain);
    }

    // Remove domain from whitelist
    removeFromWhitelist(domain) {
        this.whitelist.delete(domain);
        console.log('❌ Removed from whitelist:', domain);
    }

    // Toggle popup blocker on/off
    toggle() {
        if (this.enabled === false) {
            this.init();
            this.enabled = true;
            console.log('🛡️ Popup Blocker enabled');
        } else {
            this.enabled = false;
            console.log('⏸️ Popup Blocker disabled');
        }
    }

    // Show statistics
    showStats() {
        const stats = document.createElement('div');
        stats.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #343a40;
            color: white;
            padding: 20px 30px;
            border-radius: 8px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            font-size: 14px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
            z-index: 999999;
            text-align: center;
            min-width: 250px;
        `;
        
        stats.innerHTML = `
            <div style="margin-bottom: 15px;">
                <h3 style="margin: 0 0 10px 0; color: #28a745;">🛡️ Popup Blocker Stats</h3>
                <div style="font-size: 24px; font-weight: bold; color: #dc3545;">${this.blockedCount}</div>
                <div style="opacity: 0.8;">popups blocked</div>
            </div>
            <div style="font-size: 12px; opacity: 0.7;">
                Press Ctrl+Shift+P to toggle | Click to close
            </div>
        `;
        
        document.body.appendChild(stats);
        
        const removeStats = () => {
            document.body.removeChild(stats);
        };
        
        stats.addEventListener('click', removeStats);
        setTimeout(removeStats, 5000);
    }

    // Get current statistics
    getStats() {
        return {
            blockedCount: this.blockedCount,
            whitelistedDomains: Array.from(this.whitelist),
            enabled: this.enabled !== false
        };
    }
}

// Initialize the popup blocker when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.popupBlocker = new PopupBlocker();
    });
} else {
    window.popupBlocker = new PopupBlocker();
}

// Expose global functions for easy use
window.addToWhitelist = (domain) => window.popupBlocker?.addToWhitelist(domain);
window.removeFromWhitelist = (domain) => window.popupBlocker?.removeFromWhitelist(domain);
window.getPopupStats = () => window.popupBlocker?.getStats();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PopupBlocker;
}