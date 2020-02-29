import React, { Suspense } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import CardGalleryFlip from '../../components/Developers/Card-gallery-flip';
import data from '../../data/dataDevelopers.json';
import dataWorklog from '../../data/dataWorklog.json';
import CollapseWorklog from '../../components/Worklog/CollapseWorklog';
import './Worklog.scss';

export const WorklogEl = () => {
  const { t } = useTranslation();
  const LogItem = dataWorklog[0];

  return (
    <>
      <div className="worklog-list">
        <CollapseWorklog
            list={LogItem.log}
            tittle={t('Work Log')}
            content="log"
            t={t}
          />

        <CollapseWorklog
          list={dataWorklog[1].dif}
          tittle={t('Difficulty')}
          content="dif"
          t={t}
        />

        <CollapseWorklog
          list={dataWorklog[2].self}
          tittle={t('Self-evaluation')}
          content="self"
          t={t}
        />
      </div>
    </>
  );
};

const WorklogList = withTranslation()(WorklogEl);

export default function Worklog() {
  return (
    <Suspense fallback="loading">
      <WorklogList />
    </Suspense>
  );
}
