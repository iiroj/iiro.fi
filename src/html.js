import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

let stylesStr
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!./public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends Component {
    render () {
        const head = Helmet.rewind()
        let css
        if (process.env.NODE_ENV === `production`) {
            css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                        />
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
