import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import AuthorOfDay from './pages/AuthorOfDay/AuthorOfDay';

class AppEl extends Component {
  render() {
    return (
      <>
        <Header />
        {/* <Greeting /> */}
        <AuthorOfDay  />
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
