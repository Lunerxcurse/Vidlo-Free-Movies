// OMDb API configuration
const OMDB_API_KEY = 'afcd4c24';
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

// Sample movie data with popular movies
const movieData = {
    featured: [
        {
            id: "tt0111161",
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 4.8,
            views: "15.2M",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0111161",
            type: "movie"
        },
        {
            id: "tt0468569",
            title: "The Dark Knight",
            year: 2008,
            rating: 4.6,
            views: "18.5M",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbID: "tt0468569",
            type: "movie"
        },
        {
            id: "tt1375666",
            title: "Inception",
            year: 2010,
            rating: 4.4,
            views: "17.3M",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            imdbID: "tt1375666",
            type: "movie"
        },
        {
            id: "tt0133093",
            title: "The Matrix",
            year: 1999,
            rating: 4.2,
            views: "13.7M",
            description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0133093",
            type: "movie"
        },
        {
            id: "tt0816692",
            title: "Interstellar",
            year: 2014,
            rating: 4.3,
            views: "14.6M",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0816692",
            type: "movie"
        },
        {
            id: "tt0120737",
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            rating: 4.4,
            views: "15.1M",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ1MjY@._V1_SX300.jpg",
            imdbID: "tt0120737",
            type: "movie"
        }
    ],
    trending: [
        {
            id: "tt0111161",
            title: "The Shawshank Redemption",
            year: 1994,
            rating: 4.8,
            views: "15.2M",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0111161",
            type: "movie"
        },
        {
            id: "tt0068646",
            title: "The Godfather",
            year: 1972,
            rating: 4.7,
            views: "12.8M",
            description: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            imdbID: "tt0068646",
            type: "movie"
        },
        {
            id: "tt0468569",
            title: "The Dark Knight",
            year: 2008,
            rating: 4.6,
            views: "18.5M",
            description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbID: "tt0468569",
            type: "movie"
        },
        {
            id: "tt0050083",
            title: "12 Angry Men",
            year: 1957,
            rating: 4.5,
            views: "8.9M",
            description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            poster: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
            imdbID: "tt0050083",
            type: "movie"
        },
        {
            id: "tt0108052",
            title: "Schindler's List",
            year: 1993,
            rating: 4.7,
            views: "11.3M",
            description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0108052",
            type: "movie"
        }
    ],
    topRated: [
        {
            id: "tt0167260",
            title: "The Lord of the Rings: The Return of the King",
            year: 2003,
            rating: 4.6,
            views: "14.7M",
            description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWI5MTktXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            imdbID: "tt0167260",
            type: "movie"
        },
        {
            id: "tt0110912",
            title: "Pulp Fiction",
            year: 1994,
            rating: 4.5,
            views: "13.2M",
            description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
            imdbID: "tt0110912",
            type: "movie"
        },
        {
            id: "tt0167261",
            title: "The Lord of the Rings: The Two Towers",
            year: 2002,
            rating: 4.4,
            views: "12.9M",
            description: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            poster: "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0167261",
            type: "movie"
        },
        {
            id: "tt0120737",
            title: "The Lord of the Rings: The Fellowship of the Ring",
            year: 2001,
            rating: 4.4,
            views: "15.1M",
            description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ1MjY@._V1_SX300.jpg",
            imdbID: "tt0120737",
            type: "movie"
        },
        {
            id: "tt0109830",
            title: "Forrest Gump",
            year: 1994,
            rating: 4.3,
            views: "16.8M",
            description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            imdbID: "tt0109830",
            type: "movie"
        }
    ],
    recentlyAdded: [
        {
            id: "tt1375666",
            title: "Inception",
            year: 2010,
            rating: 4.4,
            views: "17.3M",
            description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
            imdbID: "tt1375666",
            type: "movie"
        },
        {
            id: "tt0816692",
            title: "Interstellar",
            year: 2014,
            rating: 4.3,
            views: "14.6M",
            description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0816692",
            type: "movie"
        },
        {
            id: "tt0133093",
            title: "The Matrix",
            year: 1999,
            rating: 4.2,
            views: "13.7M",
            description: "A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
            imdbID: "tt0133093",
            type: "movie"
        },
        {
            id: "tt0245429",
            title: "Spirited Away",
            year: 2001,
            rating: 4.1,
            views: "9.8M",
            description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
            imdbID: "tt0245429",
            type: "movie"
        },
        {
            id: "tt0317248",
            title: "City of God",
            year: 2002,
            rating: 4.2,
            views: "7.5M",
            description: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
            imdbID: "tt0317248",
            type: "movie"
        }
    ]
};

// Global variables
let currentHeroSlide = 0;
let heroInterval;
let currentMovie = null;
let isPlaying = false;
let currentMedia = { imdbID: '', title: '', year: '', type: '' };
let allMovies = {}; // Store all movies for filtering

// Local storage keys
const STORAGE_KEYS = {
    likes: 'streamflix_likes',
    dislikes: 'streamflix_dislikes',
    watchLater: 'streamflix_watch_later',
    continueWatching: 'streamflix_continue_watching',
    watchHistory: 'streamflix_watch_history'
};

// DOM elements
const elements = {
    heroCarousel: document.getElementById('heroCarousel'),
    searchBtn: document.getElementById('searchBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchInput: document.getElementById('searchInput'),
    searchClose: document.getElementById('searchClose'),
    suggestions: document.getElementById('suggestions'),
    movieModal: document.getElementById('movieModal'),
    closeModal: document.getElementById('closeModal'),
    playBtn: document.getElementById('playBtn'),
    videoPlayer: document.getElementById('videoPlayer'),
    backBtn: document.getElementById('backBtn'),
    embedPlayer: document.getElementById('embedPlayer'),
    navbar: document.querySelector('.navbar'),
    trendingRow: document.getElementById('trendingRow'),
    topRatedRow: document.getElementById('topRatedRow'),
    recentlyAddedRow: document.getElementById('recentlyAddedRow'),
    continueWatchingSection: document.getElementById('continueWatchingSection'),
    continueWatchingRow: document.getElementById('continueWatchingRow'),
    genresDropdown: document.getElementById('genresDropdown'),
    genresDropdownContent: document.getElementById('genresDropdownContent'),
    accountDropdown: document.getElementById('accountDropdown'),
    accountDropdownContent: document.getElementById('accountDropdownContent'),
    myFavoritesPage: document.getElementById('myFavoritesPage'),
    watchLaterPage: document.getElementById('watchLaterPage'),
    watchHistoryPage: document.getElementById('watchHistoryPage'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    watchLaterGrid: document.getElementById('watchLaterGrid'),
    historyGrid: document.getElementById('historyGrid'),
    favoritesBackBtn: document.getElementById('favoritesBackBtn'),
    watchLaterBackBtn: document.getElementById('watchLaterBackBtn'),
    historyBackBtn: document.getElementById('historyBackBtn')
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    createHeroCarousel();
    populateMovieRows();
    updateContinueWatchingSection();
    startHeroCarousel();
    showAdblockWarning();
    // Store all movies for filtering
    allMovies = {
        trending: movieData.trending,
        topRated: movieData.topRated,
        recentlyAdded: movieData.recentlyAdded
    };
}

function setupEventListeners() {
    // Navigation
    if (elements.searchBtn) elements.searchBtn.addEventListener('click', toggleSearch);
    if (elements.searchClose) elements.searchClose.addEventListener('click', toggleSearch);
    if (elements.searchInput) elements.searchInput.addEventListener('input', handleSearch);
    
    // Dropdown menus
    if (elements.genresDropdown) {
        elements.genresDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDropdown('genresDropdownContent');
        });
    }
    
    if (elements.accountDropdown) {
        elements.accountDropdown.addEventListener('click', (e) => {
            e.preventDefault();
            toggleDropdown('accountDropdownContent');
        });
    }
    
    // Genre selection
    if (elements.genresDropdownContent) {
        elements.genresDropdownContent.addEventListener('click', (e) => {
            if (e.target.dataset.genre) {
                e.preventDefault();
                filterByGenre(e.target.dataset.genre);
                closeDropdowns();
            }
        });
    }
    
    // Modal
    if (elements.closeModal) elements.closeModal.addEventListener('click', closeModal);
    if (elements.movieModal) {
        elements.movieModal.addEventListener('click', (e) => {
            if (e.target === elements.movieModal) closeModal();
        });
    }

    // Video player
    if (elements.playBtn) elements.playBtn.addEventListener('click', openVideoPlayer);
    if (elements.backBtn) elements.backBtn.addEventListener('click', closeVideoPlayer);
    
    // Account settings
    if (elements.accountDropdownContent) {
        elements.accountDropdownContent.addEventListener('click', (e) => {
            if (e.target.closest('a')) {
                const linkText = e.target.closest('a').textContent;
                if (linkText.includes('Account Settings')) {
                    e.preventDefault();
                    openAccountSettings();
                    closeDropdowns();
                } else if (linkText.includes('My Favorites')) {
                    e.preventDefault();
                    openMyFavorites();
                    closeDropdowns();
                } else if (linkText.includes('Watch Later')) {
                    e.preventDefault();
                    openWatchLater();
                    closeDropdowns();
                } else if (linkText.includes('Watch History')) {
                    e.preventDefault();
                    openWatchHistory();
                    closeDropdowns();
                }
            }
        });
    }
    
    // Page navigation
    if (elements.favoritesBackBtn) elements.favoritesBackBtn.addEventListener('click', closePage);
    if (elements.watchLaterBackBtn) elements.watchLaterBackBtn.addEventListener('click', closePage);
    if (elements.historyBackBtn) elements.historyBackBtn.addEventListener('click', closePage);
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-dropdown')) {
            closeDropdowns();
        }
        if (!e.target.closest('.search-container')) {
            clearSuggestions();
        }
    });
    
    // Close search on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (elements.searchOverlay.classList.contains('active')) {
                toggleSearch();
            } else if (elements.movieModal.classList.contains('active')) {
                closeModal();
            } else if (elements.videoPlayer.classList.contains('active')) {
                closeVideoPlayer();
            } else if (document.querySelector('.page-overlay.active')) {
                closePage();
            } else {
                closeDropdowns();
            }
        }
    });
}

// Search functionality with OMDb API
async function handleSearch(e) {
    const query = e.target.value.trim();
    if (query.length < 3) {
        clearSuggestions();
        return;
    }
    
    try {
        const response = await fetch(`${OMDB_BASE_URL}?s=${encodeURIComponent(query)}&apikey=${OMDB_API_KEY}`);
        const data = await response.json();
        
        if (data.Response === 'True') {
            displaySearchSuggestions(data.Search.slice(0, 8)); // Limit to 8 results
        } else {
            clearSuggestions();
        }
    } catch (error) {
        console.error('Search error:', error);
        clearSuggestions();
    }
}

function displaySearchSuggestions(results) {
    const suggestionsDiv = elements.suggestions;
    suggestionsDiv.innerHTML = '';
    
    results.forEach(item => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        
        const poster = item.Poster !== 'N/A' ? item.Poster : 'https://via.placeholder.com/50x75?text=No+Image';
        
        suggestionItem.innerHTML = `
            <img src="${poster}" alt="${item.Title}" onerror="this.src='https://via.placeholder.com/50x75?text=No+Image'">
            <div class="suggestion-info">
                <div class="suggestion-title">${item.Title}</div>
                <div class="suggestion-meta">${item.Year} • ${item.Type}</div>
            </div>
        `;
        
        suggestionItem.addEventListener('click', () => selectSearchResult(item));
        suggestionsDiv.appendChild(suggestionItem);
    });
}

async function selectSearchResult(item) {
    try {
        // Get detailed information
        const response = await fetch(`${OMDB_BASE_URL}?i=${item.imdbID}&apikey=${OMDB_API_KEY}&plot=full`);
        const details = await response.json();
        
        if (details.Response === 'True') {
            const movie = {
                id: item.imdbID,
                title: details.Title,
                year: details.Year,
                rating: details.imdbRating !== 'N/A' ? parseFloat(details.imdbRating) / 2 : 4.0, // Convert to 5-star scale
                views: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}M`,
                description: details.Plot !== 'N/A' ? details.Plot : 'No description available.',
                poster: details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/400x600?text=No+Image',
                imdbID: item.imdbID,
                type: item.Type,
                genre: details.Genre
            };
            
            openMovieModal(movie);
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
}

function clearSuggestions() {
    elements.suggestions.innerHTML = '';
}

function toggleDropdown(dropdownId) {
    closeDropdowns();
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.add('active');
}

function closeDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

async function filterByGenre(genre) {
    console.log('Filtering by genre:', genre);
    
    // Show loading state
    const sections = ['trending', 'topRated', 'recentlyAdded'];
    sections.forEach(section => {
        const container = document.getElementById(section + 'Row');
        container.innerHTML = '<div style="color: #fff; padding: 2rem; text-align: center;">Loading...</div>';
    });
    
    try {
        const genreQueries = {
            'action': 'action',
            'comedy': 'comedy',
            'drama': 'drama',
            'horror': 'horror',
            'romance': 'romance',
            'thriller': 'thriller',
            'sci-fi': 'science fiction',
            'documentary': 'documentary'
        };
        
        const searchQuery = genreQueries[genre] || genre;
        const response = await fetch(`${OMDB_BASE_URL}?s=${encodeURIComponent(searchQuery)}&type=movie&apikey=${OMDB_API_KEY}`);
        const data = await response.json();
        
        if (data.Response === 'True') {
            const moviePromises = data.Search.slice(0, 15).map(async (movie) => {
                try {
                    const detailResponse = await fetch(`${OMDB_BASE_URL}?i=${movie.imdbID}&apikey=${OMDB_API_KEY}`);
                    const details = await detailResponse.json();
                    
                    if (details.Response === 'True') {
                        return {
                            id: movie.imdbID,
                            title: details.Title,
                            year: details.Year,
                            rating: details.imdbRating !== 'N/A' ? parseFloat(details.imdbRating) / 2 : 4.0,
                            views: `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}M`,
                            description: details.Plot !== 'N/A' ? details.Plot : 'No description available.',
                            poster: details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/400x600?text=No+Image',
                            imdbID: movie.imdbID,
                            type: movie.Type,
                            genre: details.Genre
                        };
                    }
                } catch (error) {
                    console.error('Error fetching movie details:', error);
                    return null;
                }
            });
            
            const movies = (await Promise.all(moviePromises)).filter(movie => movie !== null);
            
            const genreTitles = {
                'action': { title: 'Action Movies', description: 'Explosive adventures and thrilling action sequences' },
                'comedy': { title: 'Comedy Movies', description: 'Hilarious films to brighten your day' },
                'drama': { title: 'Drama Movies', description: 'Compelling stories that touch the heart' },
                'horror': { title: 'Horror Movies', description: 'Spine-chilling thrills and supernatural scares' },
                'romance': { title: 'Romance Movies', description: 'Love stories that warm the heart' },
                'thriller': { title: 'Thriller Movies', description: 'Edge-of-your-seat suspense and mystery' },
                'sci-fi': { title: 'Sci-Fi Movies', description: 'Futuristic adventures and scientific wonders' },
                'documentary': { title: 'Documentary Movies', description: 'Real stories and educational content' }
            };
            
            const genreInfo = genreTitles[genre] || { title: `${genre.charAt(0).toUpperCase() + genre.slice(1)} Movies`, description: 'Curated selection of movies' };
            
            document.querySelector('#trendingRow').previousElementSibling.innerHTML = `
                <h2>${genreInfo.title}</h2>
                <p style="color: #cccccc; font-size: 0.9rem; margin-top: -1rem; margin-bottom: 1rem;">${genreInfo.description}</p>
            `;
            
            const trending = movies.slice(0, 5);
            const topRated = movies.slice(5, 10);
            const recentlyAdded = movies.slice(10, 15);
            
            populateMovieRow(elements.trendingRow, trending);
            populateMovieRow(elements.topRatedRow, topRated);
            populateMovieRow(elements.recentlyAddedRow, recentlyAdded);
            
        } else {
            // Fallback to original movies if no results
            resetToOriginalMovies();
        }
    } catch (error) {
        console.error('Error filtering by genre:', error);
        resetToOriginalMovies();
    }
}

function resetToOriginalMovies() {
    // Reset section titles
    const sections = document.querySelectorAll('.content-section');
    sections[0].querySelector('h2').textContent = 'Trending Now';
    sections[1].querySelector('h2').textContent = 'Top Rated';
    sections[2].querySelector('h2').textContent = 'Recently Added';
    
    // Remove description if it exists
    const existingDesc = document.querySelector('#trendingRow').previousElementSibling.querySelector('p');
    if (existingDesc) {
        existingDesc.remove();
    }
    
    populateMovieRow(elements.trendingRow, allMovies.trending);
    populateMovieRow(elements.topRatedRow, allMovies.topRated);
    populateMovieRow(elements.recentlyAddedRow, allMovies.recentlyAdded);
}

function openAccountSettings() {
    // Create account settings modal
    const accountModal = document.createElement('div');
    accountModal.className = 'modal-overlay account-settings-modal';
    accountModal.id = 'accountSettingsModal';
    
    accountModal.innerHTML = `
        <div class="account-settings">
            <button class="close-btn" onclick="closeAccountSettings()">
                <i class="fas fa-times"></i>
            </button>
            <div class="account-settings-content">
                <h2>Account Settings</h2>
                
                <div class="settings-section">
                    <h3>Profile Information</h3>
                    <div class="setting-item">
                        <label for="username">Username</label>
                        <input type="text" id="username" value="StreamFlixUser" readonly>
                    </div>
                    <div class="setting-item">
                        <label for="email">Email</label>
                        <input type="email" id="email" value="user@streamflix.com" readonly>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Playback Settings</h3>
                    <div class="setting-item">
                        <label for="autoplay">Auto-play next episode</label>
                        <input type="checkbox" id="autoplay" checked>
                    </div>
                    <div class="setting-item">
                        <label for="quality">Default video quality</label>
                        <select id="quality">
                            <option value="auto">Auto</option>
                            <option value="1080p">1080p</option>
                            <option value="720p">720p</option>
                            <option value="480p">480p</option>
                        </select>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Privacy & Data</h3>
                    <div class="setting-item">
                        <label for="watchHistory">Save watch history</label>
                        <input type="checkbox" id="watchHistory" checked>
                    </div>
                    <div class="setting-item">
                        <label for="recommendations">Personalized recommendations</label>
                        <input type="checkbox" id="recommendations" checked>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3>Notifications</h3>
                    <div class="setting-item">
                        <label for="emailNotifications">Email notifications</label>
                        <input type="checkbox" id="emailNotifications">
                    </div>
                    <div class="setting-item">
                        <label for="newReleases">New releases alerts</label>
                        <input type="checkbox" id="newReleases" checked>
                    </div>
                </div>
                
                <div class="settings-actions">
                    <button class="action-btn primary" onclick="saveAccountSettings()">Save Changes</button>
                    <button class="action-btn secondary" onclick="resetAccountSettings()">Reset to Default</button>
                    <button class="action-btn danger" onclick="clearAllData()">Clear All Data</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(accountModal);
    accountModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load saved settings
    loadAccountSettings();
}

function closeAccountSettings() {
    const modal = document.getElementById('accountSettingsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function loadAccountSettings() {
    const settings = JSON.parse(localStorage.getItem('streamflix_settings')) || {};
    
    if (settings.autoplay !== undefined) {
        document.getElementById('autoplay').checked = settings.autoplay;
    }
    if (settings.quality) {
        document.getElementById('quality').value = settings.quality;
    }
    if (settings.watchHistory !== undefined) {
        document.getElementById('watchHistory').checked = settings.watchHistory;
    }
    if (settings.recommendations !== undefined) {
        document.getElementById('recommendations').checked = settings.recommendations;
    }
    if (settings.emailNotifications !== undefined) {
        document.getElementById('emailNotifications').checked = settings.emailNotifications;
    }
    if (settings.newReleases !== undefined) {
        document.getElementById('newReleases').checked = settings.newReleases;
    }
}

function saveAccountSettings() {
    const settings = {
        autoplay: document.getElementById('autoplay').checked,
        quality: document.getElementById('quality').value,
        watchHistory: document.getElementById('watchHistory').checked,
        recommendations: document.getElementById('recommendations').checked,
        emailNotifications: document.getElementById('emailNotifications').checked,
        newReleases: document.getElementById('newReleases').checked
    };
    
    localStorage.setItem('streamflix_settings', JSON.stringify(settings));
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = 'Settings saved successfully!';
    successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(successMsg);
    setTimeout(() => successMsg.style.opacity = '1', 100);
    setTimeout(() => {
        successMsg.style.opacity = '0';
        setTimeout(() => successMsg.remove(), 300);
    }, 2000);
}

function resetAccountSettings() {
    document.getElementById('autoplay').checked = true;
    document.getElementById('quality').value = 'auto';
    document.getElementById('watchHistory').checked = true;
    document.getElementById('recommendations').checked = true;
    document.getElementById('emailNotifications').checked = false;
    document.getElementById('newReleases').checked = true;
}

function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This will remove your watch history, likes, and saved movies.')) {
        localStorage.clear();
        alert('All data has been cleared.');
        closeAccountSettings();
        // Refresh the page to reset everything
        window.location.reload();
    }
}

function handleScroll() {
    // Remove scroll effect since Tubi has solid navbar
}

function toggleSearch() {
    elements.searchOverlay.classList.toggle('active');
    if (elements.searchOverlay.classList.contains('active')) {
        elements.searchInput.focus();
    } else {
        elements.searchInput.value = '';
        clearSuggestions();
    }
}

function createHeroCarousel() {
    elements.heroCarousel.innerHTML = '';
    
    movieData.featured.forEach((movie, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="hero-overlay">
                <div class="hero-content">
                    <h2>${movie.title}</h2>
                    <p>${movie.description}</p>
                </div>
            </div>
        `;
        slide.addEventListener('click', () => openMovieModal(movie));
        elements.heroCarousel.appendChild(slide);
    });
}

function startHeroCarousel() {
    heroInterval = setInterval(() => {
        changeHeroSlide(1);
    }, 6000);
}

function changeHeroSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentHeroSlide].classList.remove('active');
    
    currentHeroSlide += direction;
    if (currentHeroSlide >= slides.length) currentHeroSlide = 0;
    if (currentHeroSlide < 0) currentHeroSlide = slides.length - 1;
    
    slides[currentHeroSlide].classList.add('active');
}

function populateMovieRows() {
    populateMovieRow(elements.trendingRow, movieData.trending);
    populateMovieRow(elements.topRatedRow, movieData.topRated);
    populateMovieRow(elements.recentlyAddedRow, movieData.recentlyAdded);
}

function populateMovieRow(container, movies) {
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const continueWatching = getContinueWatchingData();
    const progress = continueWatching[movie.id]?.progress || 0;
    
    card.innerHTML = `
        <div class="movie-poster">
            <img src="${movie.poster}" alt="${movie.title}">
            ${progress > 0 ? `<div class="progress-indicator" style="width: ${progress}%"></div>` : ''}
        </div>
        <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-meta">
                <div class="rating">
                    <div class="stars">${generateStars(movie.rating)}</div>
                    <span class="rating-text">${movie.rating}</span>
                </div>
                <div class="views">${movie.views} views</div>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => openMovieModal(movie));
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star star"></i>';
    }
    
    return starsHtml;
}

function openMovieModal(movie) {
    currentMovie = movie;
    currentMedia = { 
        imdbID: movie.imdbID, 
        title: movie.title, 
        year: movie.year, 
        type: movie.type || 'movie' 
    };
    
    // Update modal content
    document.getElementById('modalPoster').src = movie.poster;
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalYear').textContent = movie.year;
    document.getElementById('modalStars').innerHTML = generateStars(movie.rating);
    document.getElementById('modalRating').textContent = movie.rating;
    document.getElementById('modalViews').textContent = `${movie.views} views`;
    document.getElementById('modalDescription').textContent = movie.description;
    
    const tvShowControls = document.getElementById('tvShowControls');
    const seasonNumber = document.getElementById('seasonNumber');
    const episodeNumber = document.getElementById('episodeNumber');
    
    // Show/hide TV show controls
    if (tvShowControls) {
        if (movie.type === 'series') {
            tvShowControls.style.display = 'block';
        } else {
            tvShowControls.style.display = 'none';
        }
    }
    
    // Update action buttons
    updateActionButtons(movie);
    
    // Show modal
    elements.movieModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Setup action button listeners
    setupActionButtons(movie);
}

function filterEmbedSources(isTVShow) {
    const embedSource = elements.embedSource;
    const options = embedSource.options;
    
    for (let i = 0; i < options.length; i++) {
        if (isTVShow) {
            // Only show TV-compatible sources
            const tvSources = ['embed.su', 'vidsrc.me', 'smashy.stream', '2embed.cc', 'vidsrc.vip'];
            options[i].style.display = tvSources.includes(options[i].value) ? 'block' : 'none';
        } else {
            // Show all sources for movies
            options[i].style.display = 'block';
        }
    }
}

function updateActionButtons(movie) {
    const likes = getLikedMovies();
    const dislikes = getDislikedMovies();
    const watchLater = getWatchLaterMovies();
    
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const watchLaterBtn = document.getElementById('watchLaterBtn');
    
    // Update like button
    if (likes.includes(movie.id)) {
        likeBtn.classList.add('active');
        likeBtn.querySelector('i').className = 'fas fa-thumbs-up';
    } else {
        likeBtn.classList.remove('active');
        likeBtn.querySelector('i').className = 'far fa-thumbs-up';
    }
    
    // Update dislike button
    if (dislikes.includes(movie.id)) {
        dislikeBtn.classList.add('active');
        dislikeBtn.querySelector('i').className = 'fas fa-thumbs-down';
    } else {
        dislikeBtn.classList.remove('active');
        dislikeBtn.querySelector('i').className = 'far fa-thumbs-down';
    }
    
    // Update watch later button
    if (watchLater.some(m => m.id === movie.id)) {
        watchLaterBtn.classList.add('active');
        watchLaterBtn.querySelector('i').className = 'fas fa-bookmark';
        watchLaterBtn.querySelector('span').textContent = 'Saved';
    } else {
        watchLaterBtn.classList.remove('active');
        watchLaterBtn.querySelector('i').className = 'far fa-bookmark';
        watchLaterBtn.querySelector('span').textContent = 'Watch Later';
    }
}

function setupActionButtons(movie) {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const watchLaterBtn = document.getElementById('watchLaterBtn');
    
    // Remove existing listeners
    likeBtn.replaceWith(likeBtn.cloneNode(true));
    dislikeBtn.replaceWith(dislikeBtn.cloneNode(true));
    watchLaterBtn.replaceWith(watchLaterBtn.cloneNode(true));
    
    // Get fresh references
    const newLikeBtn = document.getElementById('likeBtn');
    const newDislikeBtn = document.getElementById('dislikeBtn');
    const newWatchLaterBtn = document.getElementById('watchLaterBtn');
    
    // Add new listeners
    newLikeBtn.addEventListener('click', () => toggleLike(movie));
    newDislikeBtn.addEventListener('click', () => toggleDislike(movie));
    newWatchLaterBtn.addEventListener('click', () => toggleWatchLater(movie));
}

function closeModal() {
    elements.movieModal.classList.remove('active');
    document.body.style.overflow = '';
    currentMovie = null;
    currentMedia = { imdbID: '', title: '', year: '', type: '' };
}

function openVideoPlayer() {
    if (!currentMovie || !currentMovie.imdbID) return;
    
    elements.videoPlayer.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Use vidlink.pro for both movies and TV shows
    let embedLink;
    if (currentMovie.type === 'series') {
        const seasonNumber = elements.seasonNumber.value || '1';
        const episodeNumber = elements.episodeNumber.value || '1';
        embedLink = `https://vidlink.pro/tv/${currentMovie.imdbID}/${seasonNumber}/${episodeNumber}`;
    } else {
        embedLink = `https://vidlink.pro/movie/${currentMovie.imdbID}`;
    }
    
    elements.embedPlayer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="${embedLink}" 
            frameborder="0" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    `;
    
    // Add to continue watching and watch history
    addToContinueWatching(currentMovie);
    addToWatchHistory(currentMovie);
    
    // Close the modal when opening video player
    closeModal();
}

function updateEmbed() {
    const { imdbID, title, year, type } = currentMedia;
    if (!imdbID) return;

    // Always use vidlink.pro
    let embedLink = '';
    if (type === 'movie') {
        embedLink = `https://vidlink.pro/movie/${imdbID}`;
    } else if (type === 'series') {
        const seasonNumber = elements.seasonNumber.value || '1';
        const episodeNumber = elements.episodeNumber.value || '1';
        embedLink = `https://vidlink.pro/tv/${imdbID}/${seasonNumber}/${episodeNumber}`;
    }

    elements.embedPlayer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="${embedLink}" 
            frameborder="0" 
            allowfullscreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    `;
}

function closeVideoPlayer() {
    elements.videoPlayer.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear the embed
    elements.embedPlayer.innerHTML = '';
}

function showAdblockWarning() {
    const warning = document.getElementById('adblockWarning');
    if (warning) {
        warning.style.display = 'block';
        setTimeout(() => {
            warning.style.display = 'none';
        }, 5000); // Auto-dismiss after 5 seconds
    }
}

function dismissAdblockWarning() {
    const warning = document.getElementById('adblockWarning');
    if (warning) {
        warning.style.display = 'none';
    }
}

// Local Storage Functions
function getLikedMovies() {
    const likes = localStorage.getItem(STORAGE_KEYS.likes);
    return likes ? JSON.parse(likes) : [];
}

function getDislikedMovies() {
    const dislikes = localStorage.getItem(STORAGE_KEYS.dislikes);
    return dislikes ? JSON.parse(dislikes) : [];
}

function getWatchLaterMovies() {
    const watchLater = localStorage.getItem(STORAGE_KEYS.watchLater);
    return watchLater ? JSON.parse(watchLater) : [];
}

function getContinueWatchingData() {
    const continueWatching = localStorage.getItem(STORAGE_KEYS.continueWatching);
    return continueWatching ? JSON.parse(continueWatching) : {};
}

function getWatchHistoryData() {
    const watchHistory = localStorage.getItem(STORAGE_KEYS.watchHistory);
    return watchHistory ? JSON.parse(watchHistory) : {};
}

function addToWatchHistory(movie) {
    const watchHistory = getWatchHistoryData();
    watchHistory[movie.id] = {
        movie: movie,
        timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEYS.watchHistory, JSON.stringify(watchHistory));
}

function toggleLike(movie) {
    const likes = getLikedMovies();
    const dislikes = getDislikedMovies();
    
    if (likes.includes(movie.id)) {
        // Remove from likes
        const updatedLikes = likes.filter(id => id !== movie.id);
        localStorage.setItem(STORAGE_KEYS.likes, JSON.stringify(updatedLikes));
    } else {
        // Add to likes and remove from dislikes if present
        const updatedLikes = [...likes, movie.id];
        const updatedDislikes = dislikes.filter(id => id !== movie.id);
        localStorage.setItem(STORAGE_KEYS.likes, JSON.stringify(updatedLikes));
        localStorage.setItem(STORAGE_KEYS.dislikes, JSON.stringify(updatedDislikes));
    }
    
    updateActionButtons(movie);
}

function toggleDislike(movie) {
    const likes = getLikedMovies();
    const dislikes = getDislikedMovies();
    
    if (dislikes.includes(movie.id)) {
        // Remove from dislikes
        const updatedDislikes = dislikes.filter(id => id !== movie.id);
        localStorage.setItem(STORAGE_KEYS.dislikes, JSON.stringify(updatedDislikes));
    } else {
        // Add to dislikes and remove from likes if present
        const updatedDislikes = [...dislikes, movie.id];
        const updatedLikes = likes.filter(id => id !== movie.id);
        localStorage.setItem(STORAGE_KEYS.dislikes, JSON.stringify(updatedDislikes));
        localStorage.setItem(STORAGE_KEYS.likes, JSON.stringify(updatedLikes));
    }
    
    updateActionButtons(movie);
}

function toggleWatchLater(movie) {
    const watchLater = getWatchLaterMovies();
    
    if (watchLater.some(m => m.id === movie.id)) {
        // Remove from watch later
        const updatedWatchLater = watchLater.filter(m => m.id !== movie.id);
        localStorage.setItem(STORAGE_KEYS.watchLater, JSON.stringify(updatedWatchLater));
    } else {
        // Add to watch later
        const updatedWatchLater = [...watchLater, movie];
        localStorage.setItem(STORAGE_KEYS.watchLater, JSON.stringify(updatedWatchLater));
    }
    
    updateActionButtons(movie);
    updateWatchLaterSection();
}

function addToContinueWatching(movie) {
    const continueWatching = getContinueWatchingData();
    continueWatching[movie.id] = {
        movie: movie,
        timestamp: Date.now(),
        progress: 0
    };
    localStorage.setItem(STORAGE_KEYS.continueWatching, JSON.stringify(continueWatching));
    updateContinueWatchingSection();
}

function updateContinueWatchingProgress(movieId, progress) {
    const continueWatching = getContinueWatchingData();
    if (continueWatching[movieId]) {
        continueWatching[movieId].progress = progress;
        continueWatching[movieId].timestamp = Date.now();
        localStorage.setItem(STORAGE_KEYS.continueWatching, JSON.stringify(continueWatching));
    }
}

function updateWatchLaterSection() {
    // Remove this function's implementation since we're removing watch later from homepage
}

function updateContinueWatchingSection() {
    const continueWatchingData = getContinueWatchingData();
    const continueWatchingMovies = Object.values(continueWatchingData)
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 10)
        .map(item => item.movie);
    
    if (continueWatchingMovies.length > 0) {
        elements.continueWatchingSection.style.display = 'block';
        populateMovieRow(elements.continueWatchingRow, continueWatchingMovies);
    } else {
        elements.continueWatchingSection.style.display = 'none';
    }
}

// Page Functions
function openMyFavorites() {
    const likes = getLikedMovies();
    const allMoviesFlat = [...movieData.trending, ...movieData.topRated, ...movieData.recentlyAdded];
    const favoriteMovies = allMoviesFlat.filter(movie => likes.includes(movie.id));
    
    populateMoviesGrid(elements.favoritesGrid, favoriteMovies, 'No favorites yet', 'Start liking movies to see them here!');
    elements.myFavoritesPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openWatchLater() {
    const watchLaterMovies = getWatchLaterMovies();
    populateMoviesGrid(elements.watchLaterGrid, watchLaterMovies, 'No movies saved for later', 'Save movies to watch them later!');
    elements.watchLaterPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openWatchHistory() {
    const historyData = getWatchHistoryData();
    const historyMovies = Object.values(historyData)
        .sort((a, b) => b.timestamp - a.timestamp)
        .map(item => ({
            ...item.movie,
            watchedAt: new Date(item.timestamp).toLocaleDateString()
        }));
    
    populateMoviesGrid(elements.historyGrid, historyMovies, 'No watch history', 'Movies you watch will appear here!');
    elements.watchHistoryPage.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePage() {
    document.querySelectorAll('.page-overlay').forEach(page => {
        page.classList.remove('active');
    });
    document.body.style.overflow = '';
}

function populateMoviesGrid(container, movies, emptyTitle, emptyMessage) {
    container.innerHTML = '';
    
    if (movies.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-film"></i>
                <h3>${emptyTitle}</h3>
                <p>${emptyMessage}</p>
            </div>
        `;
        return;
    }
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

// Touch support for mobile
let startX = 0;
let isScrolling = false;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    if (!startX) return;
    
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    
    if (Math.abs(diffX) > 50 && !isScrolling) {
        const movieRows = document.querySelectorAll('.movie-row');
        movieRows.forEach(row => {
            if (diffX > 0) {
                row.scrollLeft += 200;
            } else {
                row.scrollLeft -= 200;
            }
        });
    }
}, { passive: true });

document.addEventListener('touchend', () => {
    startX = 0;
    isScrolling = false;
}, { passive: true });