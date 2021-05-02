import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 2493172 */
    src: url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.eot');
    src: url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.woff') format('woff'),
    url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_2493172_mw46sjsi2r.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;


