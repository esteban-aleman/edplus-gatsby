import { MainLayout } from 'components/layout';
import React from 'react';

const IndexPage = () => {
  return (
    <MainLayout>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
      </h1>
    </MainLayout>
  );
};

export default IndexPage;
