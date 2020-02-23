import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';

const InitAuthorOfDay = () => {
    const { t } = useTranslation();
    return (
        <div className="wrapper">
            <div className="Author_of_day">

            </div>
        </div>
    );
  };

InitAuthorOfDay.propsTypes = {
    children: PropTypes.node
};

const AuthorOfDayComponent = withTranslation()(InitAuthorOfDay);

export default function AuthorOfDay() {
    return (
        <Suspense fallback="loading">
          <AuthorOfDayComponent />
        </Suspense>
      );
}
