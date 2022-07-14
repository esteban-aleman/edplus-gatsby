import { DetailLayout, MainLayout } from 'components/layout';
import React from 'react';

const IndexPage = () => {
  return (
    <MainLayout>
      <DetailLayout>
        <title>Details Page</title>
        <h1>
          Details Page
          <br />
          <span>Details Page</span>
        </h1>
      </DetailLayout>
    </MainLayout>
  );
};

export default IndexPage;
