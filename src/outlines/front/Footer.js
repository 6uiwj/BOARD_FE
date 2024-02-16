import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  background: #f9f9f9;
  padding: 50px 0;
  min-height: 200px;
`;

const Footer = () => {
  return (
    <FooterBox>
      <div className="layout-width">푸터..</div>
    </FooterBox>
  );
};

export default React.memo(Footer);
