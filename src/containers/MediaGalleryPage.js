import React , { Component } from 'react';
import { shutterStockVideos, flickrImages } from '../api/api';

class MediaGalleryPage extends Component {

  componentDidMount() {
    shutterStockVideos('rain').then(videos => console.log(videos, 'videos'));
    flickrImages('rain').then(images => console.log(images, 'images'));
  }

  render() {
    return (<div></div>);
  }
}

export default MediaGalleryPage;