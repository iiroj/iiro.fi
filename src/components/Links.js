import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const links = [
  {
    href: "mailto:iiro@jappinen.fi",
    icon: "e.svg",
    title: "Email"
  },
  {
    href: "https://t.me/iiroj",
    icon: "t.svg",
    title: "Telegram"
  },
  {
    href: "https://dribbble.com/iiroj",
    icon: "d.svg",
    title: "Dribbble"
  },
  {
    href: "https://m.me/iiro.jappinen",
    icon: "m.svg",
    title: "Messenger"
  },
  {
    href: "https://fi.linkedin.com/in/iiroj",
    icon: "l.svg",
    title: "Linkedin"
  },
  {
    href: "https://github.com/iiroj",
    icon: "g.svg",
    title: "GitHub"
  }
];

const Links = ({ className }) =>
  <section className={className}>
    <ul>
      {links.map(link =>
        <li key={link.title}>
          <a href={link.href}>
            <img src={link.icon} alt={`${link.title} icon`} />
            <h2>
              {link.title}
            </h2>
          </a>
        </li>
      )}
    </ul>
  </section>;

Links.propTypes = {
  className: PropTypes.string.isRequired
};

export default styled(Links)`
  background-color: hsla(0, 0%, 100%, 1);
  padding: 5vh 1rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    line-height: 32px;
    justify-content: center;
    margin: 0 auto;
    max-width: 20rem;
    width: 100%;

    > li {
      flex-basis: calc(100%/3);
    }
  }

  a {
    align-items: center;
    background: none !important;
    color: inherit;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1rem;
    text-decoration: none;

    > img {
      height: 24px;
      transition: transform 125ms ease-in;
      width: 24px;
    }

    &:hover > img {
      transform: scale(1.2);
    }

    &:active > img {
      transform: scale(1.0);
    }
  }
`;
