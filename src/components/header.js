import React from 'react';
import styled from 'styled-components';
import Logo from './logo.js';
import Nav from './nav.js';
import Login from './login.js';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 102px;
  background: #ffffff;

  @media(max-width: 567px) {
    padding: 16px 30px;
  }

  @media(max-width: 365px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Logo />
      <Nav />
      <Login />
    </HeaderStyles>
  );
};

export default Header;