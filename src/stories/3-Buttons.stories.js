import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SmallButton from '../components/UI/Buttons/SmallButton';
import AreaButton from '../components/UI/Buttons/AreaButton';

const SmallButtonProps = () => {
  const text = 'Learn More';
  return (
    <div style={{ margin: 20 }}>
      <SmallButton text={text} />
    </div>
  );
};

const AreaButtonProps = () => {
  const icon = <MenuIcon />;
  return (
    <div style={{ margin: 20 }}>
      <AreaButton icon={icon} />
    </div>
  );
};

export const SmallBUTTON = () => <SmallButtonProps />;
export const AreaBUTTON = () => <AreaButtonProps />;

export default {
  title: 'Buttons'
};
