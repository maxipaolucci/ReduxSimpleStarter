import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => { //I know that the props object that I pass in the parameter has a video property, so I just pull it out
                                  //here instead of do the next line below. Thnaks ES6
  //const video = props.video; 

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={ () => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>  
      </div>
    </li>
  );
};

export default VideoListItem;