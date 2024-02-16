import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';

const ContentBox = styled.main`
  min-height: 500px;
`;

const MainLayout = () => {
  return (
    <>
      <Header />
      <ContentBox>
        <Outlet />
      </ContentBox>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
