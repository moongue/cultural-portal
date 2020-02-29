import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StylesProvider } from '@material-ui/core/styles';
import './Cards-gallery-flip.scss';
import '../../index.scss';

const DevelopersCardGallery = props => {
  return (
    <Card className="flip-card">
      <StylesProvider injectFirst>
        <CardContent className="flip-card-inner">
          <CardContent className="flip-card-front">
            <CardMedia
              component="img"
              alt={props.name}
              style={{ width: '100%', filter: 'grayscale(1)', maxHeight: 300 }}
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
          <CardContent className="flip-card-back">
            <a href={`https://www.github.com/${props.github}`}>
              <CardMedia
                component="img"
                alt="github logo"
                style={{
                  width: '40%',
                  margin: '0 auto',
                  filter: 'grayscale(1)'
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfR8ne1cmJ7cFndjBlVkJhgdMd6ejuJubgmdiVakyfAommhBjG"
              />
              <Typography variant="h5" component="h2" style={{ color: '#FFF' }}>
                {props.github}
              </Typography>
            </a>
            <Typography variant="h6" style={{ margin: '45px 25px 0' }}>
              {props.contrib}
            </Typography>
            <Typography
              variant="body1"
              style={{
                fontFamily: 'Josefin Sans',
                fontSize: '16px',
                padding: '0 10px 40px'
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
