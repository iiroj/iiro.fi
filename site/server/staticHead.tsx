import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { raw } from '../src/design/colors.css'

const StaticHead = () => (
    <>
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/favicon.ico" rel="alternate icon" type="image/x-icon" />
        <link color="black" href="/icon.svg" rel="icon mask-icon" type="image/svg+xml" />
        <link href="/icon-192.webp" rel="apple-touch-icon" sizes="192x192" type="image/webp" />
        <link href="/icon-192.png" rel="apple-touch-icon" sizes="192x192" type="image/png" />
        <link href="/icon-512.webp" rel="apple-touch-icon" sizes="512x512" type="image/webp" />
        <link href="/icon-512.png" rel="apple-touch-icon" sizes="512x512" type="image/png" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={raw.background.primary.dark} media="(prefers-color-scheme: dark)" name="theme-color" />
        <meta content={raw.background.primary.light} name="theme-color" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </>
)

export const staticHead = renderToStaticMarkup(<StaticHead />)
