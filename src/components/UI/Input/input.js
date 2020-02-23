import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import '../../../index.scss';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '20px auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 655,
    boxShadow: ' 0px 0px 5px #000000',
    '&:hover': {
      borderBottom: '2px solid #808080'
    }
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
        className={classes.input}
        onChange={props.callback}
      />
      <IconButton
        type="submit"
        aria-label="search"
        className={classes.iconButton}
        onClick={e => this.props.onClick(e)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Input;
