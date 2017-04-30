import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import { default as Icon } from 'pages/icon.png'

const isProduction = process.env.NODE_ENV === 'production'

let stylesStr
if (isProduction) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends Component {
    render () {
        const head = Helmet.rewind()
        const css = isProduction ? <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} /> : null

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                        />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="apple-touch-icon" sizes="600x600" href="/icon.png" type="image/x-icon" />
                    {this.props.headComponents}
                    {css}
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.link.toComponent()}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}
