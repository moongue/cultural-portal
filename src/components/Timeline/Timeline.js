import React from 'react';
import { useTranslation } from 'react-i18next';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import './Timeline.scss';

const TimelineOfAuthor = (props) => {
  const { t } = useTranslation();
  const { timeline } = props.author;
  return (
    <div className="author--timeline">
      <div className="timeline--title">{t('Biography')}</div>
      <Timeline lineColor={'#808080'}>
        {timeline.map( (e, i) => 
        <TimelineItem
          key={i}
          dateText={e.date}
          dateInnerStyle={ {background: '#80DEEA', color: '#000000'} }
          bodyContainerStyle={ { padding: '10px', background: '#bfbfbf', borderRadius: '10px', boxShadow: '5px 5px 10px #bfbfbf'} }
        >
          <div>{t(`Khashchavatski timeline ${i}`)}</div>
        </TimelineItem>
          )}
      </Timeline>
    </div>
  );
}

export default TimelineOfAuthor;
