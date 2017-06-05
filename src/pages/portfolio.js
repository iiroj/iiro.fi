import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Back } from 'components/Back'
import { VerkkokauppaCom } from 'components/Portfolio/VerkkokauppaCom'
import { HumbleBundle } from 'components/Portfolio/HumbleBundle'
import { Icons } from 'components/Portfolio/Icons'

export default function PortfolioIndex () {
  const Container = styled.div`
    box-shadow: 0 1px 0 rgba(0, 0, 0, .05);
  `
  const Header = styled.header`
    background-color: white;
    font-family: Georgia, serif;
    font-size: 1.5rem;
    padding: 2rem 3rem 4rem;
    text-align: center;
  `
  const More = styled.p`
    color: hsla(0, 0%, 60%, 1);
    font-family: Georgia, serif;
    font-size: 1.5em;
    font-style: italic;
    margin: 4rem auto;
    text-align: center;
  `

  return (
    <div>
      <Helmet title='Portfolio of Iiro Jäppinen' />
      <Container>
        <Back />
        <Header>
          <h1>Portfolio of Iiro Jäppinen</h1>
        </Header>
        <VerkkokauppaCom />
        <HumbleBundle />
        <Icons />
      </Container>
      <aside>
        <More>With more coming soon...</More>
      </aside>
    </div>
  )
}

export const ButtonLink = styled.a`
  background: white !important;
  border-radius: 2px;
  color: #333333 !important;
  text-shadow: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin: 1rem 0;
  display: inline-block;
  line-height: 16px;
  padding: 12px 16px;
  transition: color 125ms ease-in, box-shadow 125ms ease-in;

  &:hover {
      color: #2171CC !important;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
      color: #333333 !important;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2), 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`
