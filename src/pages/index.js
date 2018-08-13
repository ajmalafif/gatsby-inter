import React from 'react'
import Helmet from 'react-helmet'
import '../css/font-face.css'
require('inter-ui')
import '../css/main.css'

// const isFontLoaded = '<!--#if expr="$HTTP_COOKIE=/fonts\-loaded\=true/" -->'

export default () => 
  <div className='pa4 link dim'>
    <a href="#" className='headline gray f2'>
      Home
  </a>
    <a href="/about" className='headline gray f2'>
      About
  </a>
    <Helmet>
      <title>Ajmal Afif‘s personal website 👨🏻‍💻</title>
      <meta name="description" content="👨🏽‍🎨 Designer. Also write HTML, CSS & presentational JavaScript. ⚛️ Learning JS & React." />
      <meta name="keywords" content="Ajmal Afif" />
      <meta name="image" content="src/images/icon.png" />
      {/* <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Ajmal Afif" />
      {/* <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null} */}
      {/* <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="fb:app_id" content={config.siteFBAppID ? config.siteFBAppID : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> */}
      {/* <html lang='en' className={isFontLoaded ? 'fonts-loaded' : null} /> */}
    </Helmet>
  </div>
