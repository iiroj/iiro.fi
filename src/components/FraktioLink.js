import React from 'react'
import styled from 'styled-components';

import { FraktioLogo } from 'components/FraktioLogo'

export const FraktioLink = () => {
  const Link = styled.a`
    font-family: Georgia, serif;
    font-style: normal;
    font-weight: 700;
    text-decoration: none;
  `

  return (
    <Link href='https://fraktio.fi' target='_blank'>
      <FraktioLogo /><span>fraktio</span>
    </Link>
  )
}
