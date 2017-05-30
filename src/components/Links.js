import React from 'react'
import styled from 'styled-components';

import {
  IconDribbble,
  IconEmail,
  IconFacebook,
  IconLinkedin,
  IconGitHub,
  IconTelegram
} from 'components/Icons'

export const Links = () => {
  const Section = styled.section`
      background-color: hsla(0, 0%, 100%, 1);
      padding: 5vh 1rem;
  `
  const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    line-height: 32px;
    justify-content: center;
    margin: 0 auto;
    max-width: 30rem;
    width: 100%;

    > div {
        display: flex;
        flex: auto;
        justify-content: space-around;
    }

    > div li {
      flex: 1;
    }
  `
  const Link = styled.a`
    align-items: center;
    background: none !important;
    color: inherit;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
    text-decoration: none;

    &:hover > svg {
        transform: scale(1.2);
    }

    &:active > svg {
        transform: scale(1.0);
    }
  `
  const Icon = styled.svg`
    display: inline-block;
    fill-rule: evenodd;
    fill: none;
    height: 24px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2px;
    transition: transform 125ms ease-in;
    vertical-align: -30%;
    viewBox: 0 0 32 32;
    width: 24px;

    * {
        stroke: hsla(0, 0%, 30%, 1);
    }
  `
  const StyledIconDribbble = Icon.withComponent(IconDribbble)
  const StyledIconEmail = Icon.withComponent(IconEmail)
  const StyledIconFacebook = Icon.withComponent(IconFacebook)
  const StyledIconLinkedin = Icon.withComponent(IconLinkedin)
  const StyledIconGitHub = Icon.withComponent(IconGitHub)
  const StyledIconTelegram = Icon.withComponent(IconTelegram)

  return (
    <Section>
      <List>
        <div>
          <li>
            <Link href='mailto:iiro@jappinen.fi'>
              <StyledIconEmail />
              <h2>Email</h2>
            </Link>
          </li>
          <li>
            <Link href='https://t.me/iiroj'>
              <StyledIconTelegram />
              <h2>Telegram</h2>
            </Link>
          </li>
          <li>
            <Link href='https://m.me/iiro.jappinen' >
              <StyledIconFacebook />
              <h2>Facebook</h2>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href='https://fi.linkedin.com/in/iiroj' >
              <StyledIconLinkedin />
              <h2>LinkedIn</h2>
            </Link>
          </li>
          <li>
            <Link href='https://dribbble.com/iiroj' >
              <StyledIconDribbble />
              <h2>Dribbble</h2>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/iiroj' >
              <StyledIconGitHub />
              <h2>GitHub</h2>
            </Link>
          </li>
        </div>
      </List>
    </Section>
  )
}
