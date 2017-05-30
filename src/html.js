import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default function HTML (props) {
  const head = Helmet.rewind()

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        {props.headComponents}
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' sizes='600x600' href='/icon.png' type='image/x-icon' />
      </head>
      <body>
        <div id='react-mount' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
