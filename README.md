# Movies recomandation with AI.

# Setup
Install react app using create-react-app (CRA)
npm create vite@latest netflix-gpt

Create .env file and put configure
VITE_REACT_APP_TMDB_KEY = YOUR_APPLICATION_TMDB_KEY; 


# Install and init tailwind css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- goto tmdb doc to find the way to get data
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- useupComingMovie custom hook
- useuseTopRatedMovie custom hook
- BUILD GPT Search Page
- BUILD GPT Search Bar
- Bigfeature:implement the multi language feature in GPTsearchbar





# Features
- Login/Sign Up
    - Sign In /Sign up Form
    - redirect to Browse Page
- Browse (after authentication)
    - Header
    - Main Movie
        - Tailer in Background
        - Title & Description
        - MovieSuggestions
            - MovieLists * N 
- NetflixGPT
    - Search Bar
    - Movie Suggestions