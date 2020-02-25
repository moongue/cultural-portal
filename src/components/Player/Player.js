import React from 'react';
import YouTube from '@u-wave/react-youtube';
import './Player.scss';

const Player = ( {youtube} ) => {
  const codeVideo = youtube.slice(-11, youtube.length);
  return (
    <div className='player'>
      <YouTube 
        video = { codeVideo }
        className='video_player'
      />
    </div>
  );
}

export default Player;
