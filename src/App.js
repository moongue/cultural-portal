import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ScrollToTop from './hoc/ScrollToTop';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Developers from './pages/Developers/Developers';
import AuthorOfDay from './pages/AuthorOfDay/AuthorOfDay';
import FilmDirectorsList from './pages/FilmDirectorsList/FilmDirectorsList';
import FilmDirector from './pages/FilmDirector/FilmDirector';
import Footer from './components/Footer/Footer';

class AppEl extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="wrapper">
          <Route path="/" exact>
            <Greeting />
            <AuthorOfDay />
            <Footer />
          </Route>
          <Route path="/film-directors" exact component={FilmDirectorsList} />
          <Route path="/film-directors/:id" component={FilmDirector} />
          <Route path="/developers">
            <Developers />
            <Footer />
          </Route>
        </div>
      </>
    );
  }
}

const AppComponent = withTranslation()(AppEl);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Suspense fallback="loading">
          <AppComponent />
        </Suspense>
      </ScrollToTop>
    </BrowserRouter>
  );
}
