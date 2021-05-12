import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.div`
  flex-grow: 1;
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 413px;
    margin: 0 auto;
    list-style: none;
  }
  li {
    
  }
  li a {
    font-size: 22px;
    line-height: 26px;
    color: #000000;
  }
`;

const Nav = () => {
  return (
    <NavStyles>
      <ul>
        <li><Link to="/">Item 1</Link></li>
        <li><Link to="/">Item 2</Link></li>
        <li><Link to="/">Item 3</Link></li>
        <li><Link to="/">Item 4</Link></li>
      </ul>
    </NavStyles>
  );
};

export default Nav;