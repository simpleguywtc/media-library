import React , { Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';

class MediaGalleryPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(searchMediaAction('rain'));
  }

  render() {
    return (<div></div>);
  }
}

const mapStateToProps = ({ images, videos }) => ({
  videos: videos[0],
  selectedVideo: videos.selectedVideo,
  images: images[0],
  selectedImage: images.selectedImage
});

export default connect(mapStateToProps)(MediaGalleryPage);