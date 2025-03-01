export const BACKGROUND_iMG = "https://assets.nflxext.com/ffe/siteui/vlv3/e3e9c31f-aa15-4a8f-8059-04f01e6b8629/web/IN-en-20250113-TRIFECTA-perspective_febfa442-23d9-45f3-937e-72f8b971f7a9_small.jpg";
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_API_OPTIONS
    }
  };
export const NOWPLAYING_API = "https://api.themoviedb.org/3/movie/now_playing";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original/";
export const SUPPORTED_LANGUAGES = [
  {
    identifier : "en",
    name : "English"
  },
  {
    identifier : "hindi",
    name : "Hindi"
  },
  {
    identifier : "telugu",
    name : "Telugu"
  },
  {
    identifier : "russian",
    name : "Russian"
  },
  {
    identifier : "korean",
    name : "Korean"
  }
]
export const OPENAPI_KEY = process.env.REACT_APP_OPENAPI_KEY 

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINIAPI_KEY