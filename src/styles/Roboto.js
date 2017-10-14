import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(/fonts/roboto-regular.woff2) format('woff2'),
      url(/fonts/roboto-regular.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: local('Roboto Italic'), local('Roboto-Italic'), url(/fonts/roboto-italic.woff2) format('woff2'),
      url(/fonts/roboto-italic.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto Medium'), local('Roboto-Medium'), url(/fonts/roboto-medium.woff2) format('woff2'),
      url(/fonts/roboto-medium.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
      url(/fonts/roboto-mediumitalic.woff2) format('woff2'), url(/fonts/roboto-mediumitalic.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'), url(/fonts/roboto-bold.woff2) format('woff2'),
      url(/fonts/roboto-bold.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(/fonts/roboto-bolditalic.woff2) format('woff2'),
      url(/fonts/roboto-bolditalic.woff) format('woff');
    unicode-range: U+0000-00ff, U+0131, U+0152-0153, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2212, U+2215;
  }
`;

export default fonts;
