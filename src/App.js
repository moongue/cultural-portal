import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import FilmDirectorsList from './pages/FilmDirectorsList/FilmDirectorsList';
import FilmDirector from './pages/FilmDirector/FilmDirector';

class AppEl extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <Route path="/" exact>
            <Greeting />
          </Route>
          <Route path="/film-directors" exact component={FilmDirectorsList} />
          <Route path="/film-directors/:id" component={FilmDirector} />
        </div>
      </>
    );
  }
}

const AppComponent = withTranslation()(AppEl);

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <AppComponent />
      </Suspense>
    </BrowserRouter>
  );
}
