import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  a {
    box-sizing: border-box;
    padding: 5px 44px;
    border-radius: 21px;
    background: #2d5b8f;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;

const Logo = () => {
  return (
    <LogoStyles>
      <Link to="/">Logo</Link>
    </LogoStyles>
  );
};

export default Logo;