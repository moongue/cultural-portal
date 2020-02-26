import React, { Suspense } from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

const FooterEl = () => (
  <footer className="footer">
    <p>Cultural portal 2020&#169;</p>
  </footer>
);

const FooterComponent = withTranslation()(withRouter(FooterEl));

export default function Footer() {
  return (
    <Suspense fallback="loading">
      <FooterComponent />
    </Suspense>
  );
}
