import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';
import '../../../index.scss';

const MyButton = styled(Button)({
  fontFamily: 'Roboto, sans-serif',
  fontSize: 11,
  background: '#808080',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 1px 4px 1px #000000',
  color: 'white',
  height: 30,
  width: 141,
  margin: 'auto',
  padding: '0 30px',

  '&:hover': {
    background: '#585454'
  }
});

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto, sans-serif',
    height: 500,
    width: 300,
    border: '2px solid #000000',
    boxShadow: '0px 0px 2px #222',
    '&:hover': {
      boxShadow: '0px 0px 6px #222'
    }
  }
});

const FilmmakerCardGallery = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="300px"
          width="100%"
          src={props.img}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ lineHeight: '16px' }}
          >
            {props.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            style={{
              fontFamily: 'Josefin Sans',
              fontSize: '16px',
              paddingTop: 0
            }}
          >
            {props.years}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <MyButton onClick={e => this.props.onClick(e)}>
          {props.nameButton}
        </MyButton>
      </CardActions>
    </Card>
  );
};

export default FilmmakerCardGallery;
