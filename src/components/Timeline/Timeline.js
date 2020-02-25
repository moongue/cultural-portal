import React from 'react';
import { useTranslation } from 'react-i18next';
import './Timeline.scss';

const Timeline = (props) => {
  const { t } = useTranslation();
  const { timeline } = props.author;
  return (
    <div className="timeline">
      <div className="timeline--title">Biography</div>
      <div className="timeline--container">
        {timeline.map( (e, i) => 
          <div className="entry" key={i}>
            <div className="title">{e.date}</div>
            <div className="information">{t(`Khashchavatski timeline ${i}`)}</div>
          </div> 
        )}
      </div>
    </div>
  );
}

export default Timeline;
