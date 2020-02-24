import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SmallButton from '../components/UI/Buttons/Small-button';
import BigButton from '../components/UI/Buttons/Big-button';
import AreaButton from '../components/UI/Buttons/Area-button';

const SmallButtonProps = () => {
  const text = 'Learn More';
  return <SmallButton text={text} />;
};

const BigButtonProps = () => {
  const text = 'Learn More';
  return <BigButton text={text} />;
};

const AreaButtonProps = () => {
  const icon = <MenuIcon />;
  return <AreaButton icon={icon} />;
};

export const SmallBUTTON = () => <SmallButtonProps />;
export const BigBUTTON = () => <BigButtonProps />;
export const AreaBUTTON = () => <AreaButtonProps />;

export default {
  title: 'Buttons'
};
