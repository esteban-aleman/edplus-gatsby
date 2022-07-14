import React from 'react';
import { Footer, Header } from 'components/layout';
import { mockFooterProps } from '../footer/Footer.mocks';
import { MainLayoutProps } from './MainLayoutProps';
import 'styles/global.scss';

const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer columns={mockFooterProps.columns} />
    </>
  );
};

export default MainLayout;
