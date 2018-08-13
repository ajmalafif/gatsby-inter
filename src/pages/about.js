import React from 'react'
import Helmet from 'react-helmet'
import '../css/font-face.css'
require('inter-ui')
import '../css/main.css'

export default () =>
    <div className='pa4 link dim'>
      <a href="/" className='headline gray f2'>
        Home
  </a>
      <a href="#" className='headline gray f2'>
        About
  </a>
    </div>
