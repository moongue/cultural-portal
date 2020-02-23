import React, { Component, Suspense } from 'react';
import {Switch, Route} from "react-router-dom";
import { withTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Developers from './pages/Developers/Developers';

class AppEl extends Component {
  render() {
    return (
      <>
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Greeting />
          </Route>
          <Route path="/developers">
            <Developers />
          </Route>
        </Switch>
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
