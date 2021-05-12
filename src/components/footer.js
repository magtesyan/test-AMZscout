import React from 'react';
import styled from 'styled-components';
import FooterNavList from './footer-nav-list.js';

const FooterStyles = styled.div`
  background: #ffffff;
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 695px;
    margin: 0 auto;
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <ul>
        <FooterNavList />
        <FooterNavList />
        <FooterNavList />
        <FooterNavList />
      </ul>
    </FooterStyles>
  );
};

export default Footer;