import React, { PropTypes } from 'react';

const VideosPage = ({ videos, onHandleSelectVideo, selectedVideo }) => (
  <div className="col-md-16">
    <h2>Videos</h2>
    <div className="selected-video">
      <div id={selectedVideo.id}>
        <h6>{selectedVideo.title}</h6>
        <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.description} />
      </div>
    </div>
    <div className="video-thumbnail">
      {videos.map((video, i) => (
        <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>
  </div>
);

VideosPage.propTypes = {
  videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;