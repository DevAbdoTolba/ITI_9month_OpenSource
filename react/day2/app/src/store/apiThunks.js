import { showLoader, hideLoader } from './loaderSlice';

export const fetchApiData = (urlPath) => async (dispatch) => {
  dispatch(showLoader());
  
  try {
    const baseUrl = `https://api.themoviedb.org/3${urlPath.startsWith('/') ? '' : '/'}${urlPath}`;
    const urlObj = new URL(baseUrl);
    urlObj.searchParams.append('api_key', '442f3673d5061a81a97b9aaa3d244a01');
    
    const response = await fetch(urlObj.toString());
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error: ", error);
    throw error;
  } finally {
    dispatch(hideLoader());
  }
};
