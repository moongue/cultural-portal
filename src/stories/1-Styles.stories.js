import React from 'react';
import '../index.scss';

export const Heading = () => (
  <div>
    <h1>
      This is h1
      <span style={{ fontSize: 20 }}>(align:none)</span>
    </h1>
    <h4>
      This is h4
      <span style={{ fontSize: 20 }}>(align:none)</span>
    </h4>
    <h2>
      This is h2
      <span style={{ fontSize: 15 }}>(align:center)</span>
    </h2>
    <h3>
      This is h3
      <span style={{ fontSize: 10 }}>(align:center)</span>
    </h3>
  </div>
);

export const Color = () => (
  <div style={{ display: 'flex', width: 400, height: 150 }}>
    <div
      style={{
        fontSize: 20,
        color: '#fff',
        lineHeight: 5,
        textAlign: 'center',
        backgroundColor: '#000',
        width: 150,
        height: 150,
        marginRight: 20
      }}
    >
      <p>primary color</p>
    </div>
    <div
      style={{
        fontSize: 20,
        color: '#fff',
        lineHeight: 5,
        textAlign: 'center',
        backgroundColor: '#585454',
        width: 150,
        height: 150,
        marginRight: 20
      }}
    >
      <p>secondary color</p>
    </div>
  </div>
);

export const Link = () => (
  <a href="./" style={{ fontSize: '35px' }}>
    This is a link
  </a>
);

export const Fonts = () => (
  <>
    <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '35px' }}>
      This is a font 1 (1,2,3,4,5)
    </p>
    <p style={{ fontFamily: 'Josefin Sans', fontSize: '35px' }}>
      This is a font 2(1,2,3,4,5)
    </p>
  </>
);

export default {
  title: 'Styles'
};
