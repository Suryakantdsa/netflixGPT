export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const PROFILE_AVATAR =
  "https://avatars.githubusercontent.com/u/118671953?v=4";
export const BACKGROUND_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const IMG_TMDB_URL="https://image.tmdb.org/t/p/w500"

const apiKey = import.meta.env.VITE_REACT_APP_TMDB_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+apiKey
    }
  };
export default API_OPTIONS

export const LANGUAGE_SUPPORTED={
  lang:["English","Hindi","Odia"]
}