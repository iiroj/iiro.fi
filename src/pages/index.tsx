import { css } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import * as React from "react";

import { highlight, minWidth, spacing, scale, transition } from "../design";

import experience from "../constants/experience";
import links from "../constants/links";
import microdata from "../constants/microdata.json";

import Experience from "../components/Experience";
import Image from "../components/Image";
import { NextPage } from "next";

const link = css(highlight, {
  ...transition("background-position"),

  "&:hover": {
    backgroundPosition: "0"
  }
});

const list = css({
  alignItems: "flex-start",
  display: "inline-flex",
  flexDirection: "column",
  marginLeft: "0.8ch",

  "li + li": {
    marginTop: "0.5em"
  }
});

const listContainer = css({
  alignItems: "flex-start",
  display: "flex",

  "> p": {
    flexShrink: 0
  }
});

const main = css({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 50%",
  justifyContent: "center",
  padding: `${spacing.medium} ${spacing.small} ${spacing.small}`,

  "> *": {
    maxWidth: scale(13)
  },

  "> header, section": {
    marginBottom: spacing.small
  },

  ...minWidth.tablet({
    padding: `${spacing.large} ${spacing.medium}`
  })
});

const container = css({
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",

  ...minWidth.desktop({
    flexDirection: "row"
  })
});

const Root: NextPage<{}> = () => (
  <div css={container}>
    <Helmet>
      <title>Iiro Jäppinen</title>
      <meta
        name="description"
        content={`I'm a ${experience[0].jobTitle} at ${experience[0].company}`}
      />
      <script type="application/ld+json">{JSON.stringify(microdata)}</script>
    </Helmet>

    <main css={main}>
      <header>
        <h1>Iiro Jäppinen</h1>
      </header>

      <section css={listContainer}>
        <p>I&apos;m a</p>
        <ul css={list}>
          {experience.map((item, key) => (
            <li key={key} style={{ opacity: key === 0 ? 1 : 0.8 - key * 0.2 }}>
              <Experience {...item} highlight={key === 0} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p>
          I create web applications with clean interfaces and rich interactions.
          I maintain open-source libraries that solve problems. I like to keep
          design simple and to the point.
        </p>
      </section>

      <footer>
        <ul css={list}>
          {links.map(({ Icon, href, label }) => (
            <li key={href}>
              <a
                css={link}
                href={href}
                rel="author noopener noreferrer"
                target="_blank"
              >
                <Icon /> <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </main>

    <Image />
  </div>
);

export default React.memo(Root);
