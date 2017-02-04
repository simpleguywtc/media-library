import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { searchMediaAction, selectImageAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';

class MediaGalleryPage extends Component {
  constructor(props) {
    super(props);

    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let { dispatch } = this.props;
    dispatch(searchMediaAction('rain'));
  }

  handleSelectImage(selectedImage) {
    let { dispatch } = this.props;
    dispatch(selectImageAction(selectedImage));
  }

  handleSelectVideo(selectedVideo) {
    let { dispatch } = this.props;
    dispatch(selectVideoAction(selectedVideo));
  }

  handleSearch(event) {
    event.preventDefault();
    if (this.query != null) {
      let { dispatch } = this.props;
      dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    let { images, selectedImage, videos, selectedVideo } = this.props;
    let loading = (<div className="col-md-16">Loading ...</div>);
    return (
      <div className="container-fluid">
        <input type="text" ref={(input) => { this.query = input}} />
        <input type="submit" className="btn btn-primary" value="Search Library" onClick={this.handleSearch} />
        <div className="row">
          { (images && selectedImage) ?
            <PhotoPage images={images} selectedImage={selectedImage} onHandleSelectImage={this.handleSelectImage} />
            : loading }
          { (videos && selectedVideo) ?
            <VideoPage videos={videos} selectedVideo={selectedVideo} onHandleSelectVideo={this.handleSelectVideo} />
            : loading }
        </div>
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {

};

const mapStateToProps = ({ images, videos }) => ({
  videos: videos[0],
  selectedVideo: videos.selectedVideo,
  images: images[0],
  selectedImage: images.selectedImage
});

export default connect(mapStateToProps)(MediaGalleryPage);