import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import "@fontsource/open-sans"
import Footer from './footer.js';
import Header from './header.js';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`

const SiteBorderStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  font-family: "Open Sans";
  background: #f2f2f2;
  min-height: 100vh;

  .content {
    flex-grow: 1;
  }
`;


const Layout = (props) => {
  return (
    <SiteBorderStyles>
      <GlobalStyle />
      <div className="content">
        <Header />
        {props.children}
      </div>
      <Footer />
    </SiteBorderStyles>
  )
};

export default Layout;