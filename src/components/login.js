import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const LoginStyles = styled.div`
  a {
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    color: #000000;
  }
`;

const Login = () => {
  return (
    <LoginStyles>
      <Link to="/">Log in/Sign up</Link>
    </LoginStyles>
  );
};

export default Login;