import React from 'react';
import styled from 'styled-components';
import Logo from './logo.js';
import Nav from './nav.js';
import Login from './login.js';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 102px;
  background: #ffffff;
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