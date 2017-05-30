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

  return (
    <Section>
      <List>
        <div>
          <li>
            <Link href='mailto:iiro@jappinen.fi'>
              <IconEmail />
              <h2>Email</h2>
            </Link>
          </li>
          <li>
            <Link href='https://t.me/iiroj'>
              <IconTelegram />
              <h2>Telegram</h2>
            </Link>
          </li>
          <li>
            <Link href='https://m.me/iiro.jappinen' >
              <IconFacebook />
              <h2>Facebook</h2>
            </Link>
          </li>
        </div>
        <div>
          <li>
            <Link href='https://fi.linkedin.com/in/iiroj' >
              <IconLinkedin />
              <h2>LinkedIn</h2>
            </Link>
          </li>
          <li>
            <Link href='https://dribbble.com/iiroj' >
              <IconDribbble />
              <h2>Dribbble</h2>
            </Link>
          </li>
          <li>
            <Link href='https://github.com/iiroj' >
              <IconGitHub />
              <h2>GitHub</h2>
            </Link>
          </li>
        </div>
      </List>
    </Section>
  )
}
