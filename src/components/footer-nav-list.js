import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterNavListStyles = styled.div`
  padding: 36px 0;
  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    font-size: 22px;
    line-height: 30px;
  }

  li:first-child {
    font-weight: bold;
  }
`;

const FooterNavList = () => {
  return (
    <FooterNavListStyles>
      <ul>
        <li><Link to="/">Menu 1</Link></li>
        <li><Link to="/">Menu 1</Link></li>
        <li><Link to="/">Menu 1</Link></li>
        <li><Link to="/">Menu 1</Link></li>
      </ul>
    </FooterNavListStyles>
  );
};

export default FooterNavList;