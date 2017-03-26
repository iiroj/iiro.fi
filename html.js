import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

export default class HTML extends Component {
    static propTypes = {
        body: PropTypes.string.isRequired
    }

    render () {
        const head = Helmet.rewind()

        let css
        let bundle = (<script src={`/bundle.js`} />)
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
            bundle = null
        }

        return (
            <html lang="en">
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0" />
                    <link rel="icon" sizes="600x600" href="/icon.png" />
                    <link rel="apple-touch-icon" href="/icon.png" />
                    {head.title.toComponent()}
                    {head.meta.toComponent()}
                    {head.script.toComponent()}
                    {css}
                </head>
                <body>
                    <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {bundle}
                </body>
            </html>
        )
    }
}
