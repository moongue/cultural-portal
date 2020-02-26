import React from 'react';
import { useTranslation } from 'react-i18next';
import YouTube from '@u-wave/react-youtube';
import './Player.scss';

const Player = ({ youtube }) => {
  const { t } = useTranslation();
  const codeVideo = youtube.slice(-11, youtube.length);
  return (
    <div className="player">
      <div className="player--title">{t('Video')}</div>
      <YouTube video={codeVideo} className="video_player" width="100%" />
    </div>
  );
};

export default Player;
