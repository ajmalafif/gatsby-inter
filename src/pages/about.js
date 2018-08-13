import React from 'react'
import Helmet from 'react-helmet'
import '../css/font-face.css'
import '../css/main.css'

var FontFaceObserver = require('fontfaceobserver');

// Define phase 2 fonts
const interNormal = new FontFaceObserver('Inter UI', { weight: 400 });
const interSemiBold = new FontFaceObserver('Inter UI Medium', { weight: 500 });

exports.onInitialClientRender = () => {

  Promise.all([
    interNormal.load(),
    interSemiBold.load(),
  ]).then(function () {
    document.documentElement.className += " fonts-loaded";
  }, function () {
    document.documentElement.className += " fonts-unavailable";
  });
};

const isFontLoaded = '<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->'


export default () =>
    <div className='pa4 link dim'>
      <a href="/" className='headline gray f2'>
        Home
  </a>
      <a href="#" className='headline gray f2'>
        About
  </a>
      <Helmet>
        <html lang='en' className={isFontLoaded ? 'fonts-loaded' : null} />
      </Helmet>
    </div>
