import React from 'react'
import Helmet from 'react-helmet'
import '../css/font-face.css'
require('inter-ui')
import '../css/main.css'

// const isFontLoaded = '<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->'

export default () =>
    <div className='pa4 link dim'>
      <a href="/" className='headline gray f2'>
        Home
  </a>
      <a href="#" className='headline gray f2'>
        About
  </a>
      <Helmet>
        {/* <html lang='en' className={isFontLoaded ? 'fonts-loaded' : null} /> */}
      </Helmet>
    </div>
