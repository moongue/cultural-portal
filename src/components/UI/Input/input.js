import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import '../../../index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 656,
    boxShadow: '0 0 9px rgba(0, 0, 0, 0.2);'
  },
  input: {
    fontSize: 21,
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const Input = props => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <InputBase
        autoFocus
        placeholder="Search"
        value={props.value}
        className={classes.input}
        onChange={props.callback}
      />

      <SearchIcon />
    </Paper>
  );
};

export default Input;
