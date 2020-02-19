import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';

class AppEl extends Component {
  render() {
    return (
      <>
        <Header />
        <Greeting />
      </>
    );
  }
}

const AppComponent = withTranslation()(AppEl);

export default function App() {
  return (
    <Suspense fallback="loading">
      <AppComponent />
    </Suspense>
  );
}
