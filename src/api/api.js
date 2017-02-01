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
};

/**
* Access Flickr search endpoint for photos
* @param { String } searchQuery
* @return { Array }
*/
export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;

  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};