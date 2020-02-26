import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';
import './Cards-gallery-flip.scss';
import '../../index.scss';


const useStyles = makeStyles({
  root: {
    fontFamily: 'Roboto, sans-serif',
    width: '29.9%',
    margin: '0 1.7% 25px',
    boxShadow: '0 0 9px rgba(0, 0, 0, 0.2)',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      boxShadow: '8px 8px 24px rgba(0, 0, 0, 0.4)',
      transform: 'scale(1.025)'
    }
  }
});

const DevelopersCardGallery = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root + ' flip-card'}>
        <StylesProvider injectFirst>
          <CardContent className='flip-card-inner'>
            <CardContent className='flip-card-front'>
              <CardMedia
                component="img"
                alt={props.name}
                style={{ width: '100%', filter: 'grayscale(1)' }}
                src={props.img}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ lineHeight: '1.2' }}
                >
                  {props.name}
                </Typography>
                <Typography
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
              </CardContent>
            
              
            </CardContent>
            <CardContent className='flip-card-back' >
            <a href={`https://www.github.com/${props.github}`}>
              <CardMedia
                component="img"
                alt={'github logo'}
                style={{ width: '40%', margin:'0 auto', filter: 'grayscale(1)' }}
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfR8ne1cmJ7cFndjBlVkJhgdMd6ejuJubgmdiVakyfAommhBjG'}
              />
              <Typography
                variant="h5"
                component="h2"
                style={{ color: '#FFF' }}
              >
                {props.github}
              </Typography>
            </a>
            <Typography
                variant="h6"
                style={{ margin: '45px 25px 0' }}
              >
                Contribution for this project:
              </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: 'Josefin Sans', 
                fontSize: '16px',
                paddingBottom: '40px'
              }}
            >
                {props.description}
            </Typography>

            </CardContent>
          </CardContent>
        </StylesProvider>
    </Card>
  );
};

export default DevelopersCardGallery;
