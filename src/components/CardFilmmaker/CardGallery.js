import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../index.scss';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto, sans-serif',
    width: '29.9%',
    margin: '0 1.7% 25px',
    boxShadow: '0 0 9px rgba(0, 0, 0, 0.2)',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.4)',
      transform: 'scale(1.025)'
    }
  }
});

const FilmmakerCardGallery = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/film-directors/${props.id}`}>
        <CardActionArea
          style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}
        >
          <CardMedia
            component="img"
            alt={props.name}
            style={{ width: '100%', height: 300, filter: 'grayscale(1)' }}
            src={props.img}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ lineHeight: '1.2' }}
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
              {props.city}
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
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default FilmmakerCardGallery;
