import React, { Component, Suspense } from 'react';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import { filmDirectors } from './data/dataFilmDirectors';

class LegacyComponentClass extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <nav
          style={{ width: '100%', padding: '2rem 0', backgroundColor: 'gray' }}
        >
          <button onClick={() => i18next.changeLanguage('en')}>English</button>
          <button onClick={() => i18next.changeLanguage('ru')}>Russian</button>
          <button onClick={() => i18next.changeLanguage('by')}>
            Belarusian
          </button>
        </nav>
        <p>
          {filmDirectors.map(item => (
            <>
              <p>{t(`${item.name}`)}</p>
              <img src={item.photo} alt="" />
            </>
          ))}
        </p>
        <div>
          {filmDirectors[0].timeline.map(item => (
            <>
              <p>{t(`${item.date}`)}</p>
              <p>{t(`${item.info}`)}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(LegacyComponentClass);

export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
