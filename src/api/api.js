const FLICKR_API_KEY = '7fb171dbc19457d8fa9db90651d652ab';
const SHUTTERSTOCK_CLIENT_ID = '12c4a0a4ae6c8c9f4bd4';
const SHUTTERSTOCK_CLIENT_SECRET = '2363a217e49c57dd1ec63ef53d47c350c50040a3';

// Basic Authentication for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTERSTOCK_CLIENT_ID}:${SHUTTERSTOCK_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

/**
 * Access Shutterstock search endpoint for short videos
 * @param { String } searchQuery
 * @return { Array } listVideos
 */
export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;
  console.log(SHUTTERSTOCK_API_ENDPOINT);
  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
  .then(response => {
    return response.json();
  })
  .then(json => {
    return json.data.map(({id, assets, description}) => ({
      id,
      mediaUrl: assets.preview_mp4.url,
      description
    }));
  });

  return 'test';
};