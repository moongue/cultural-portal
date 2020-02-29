import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const AreaButton = props => {
  return (
    <IconButton
      edge="start"
      color="inherit"
      // eslint-disable-next-line react/no-this-in-sfc
      onClick={e => this.props.onClick(e)}
    >
      {props.icon}
    </IconButton>
  );
};

export default AreaButton;
