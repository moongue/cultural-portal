import React, { Suspense } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import Drawer from '@material-ui/core/Drawer';
import { withTranslation, useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import BrushIcon from '@material-ui/icons/Brush';
import './Header.scss';
import i18next from 'i18next';
import logo from '../../assets/logo.svg';

const HeaderEl = props => {
  const [state, setState] = React.useState({
    nav: [
      {
        title: 'Home',
        link: '/',
        icon: <HomeRoundedIcon />
      },
      {
        title: 'Film Directors',
        link: '/film-directors',
        icon: <ListAltRoundedIcon />
      },
      {
        title: 'Developers',
        link: '/developers',
        icon: <CodeRoundedIcon />
      },
      {
        title: 'Worklog',
        link: '/worklog',
        icon: <PlaylistAddCheckRoundedIcon />
      },
      {
        title: 'Styleguide',
        link: '/storybook',
        icon: <BrushIcon />
      }
    ],
    left: false,
    lang: localStorage.getItem('i18nextLng') || 'en'
  });
  const { t } = useTranslation();

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <nav>
        <ul className="List-nav">
          {state.nav.map((link, index) => (
            <li key={index}>
              <ListItem button key={index}>
                <NavLink to={link.link}>
                  {link.icon}
                  {t(`${link.title}`)}
                </NavLink>
              </ListItem>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  function pageTitle() {
    switch (props.location.pathname) {
      case '/':
        return 'Author of the day';
      case '/developers':
        return 'Developers';
      case '/film-directors':
        return 'Film Directors';
      case '/worklog':
        return 'Worklog';
      default:
        return 'Film Director page';
    }
  }

  const handleChangeLang = event => {
    setState({ ...state, lang: event.target.value });
    i18next.changeLanguage(event.target.value);
  };

  return (
    <header className="Header">
      <div className="Wrap-Header">
        <div className="Block">
          <IconButton
            onClick={toggleDrawer('left', true)}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <p>{t('Menu')}</p>
          <h3>{t(pageTitle())}</h3>
        </div>
        <NavLink to="/" className="Logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <div className="Lang-wrap">
          <p>{t('Lang')}:</p>
          <FormControl>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={state.lang}
              onChange={handleChangeLang}
              displayEmpty
            >
              <MenuItem value="en">en</MenuItem>
              <MenuItem value="ru">ru</MenuItem>
              <MenuItem value="by">by</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Drawer
        className="Drawer"
        open={state.left}
        onClose={toggleDrawer('left', false)}
      >
        {sideList('left')}
      </Drawer>
    </header>
  );
};

const HeaderComponent = withTranslation()(withRouter(HeaderEl));

export default function Header() {
  return (
    <Suspense fallback="loading">
      <HeaderComponent />
    </Suspense>
  );
}
