import { DetailLayout, MainLayout } from 'components/layout';
import { graphql } from 'gatsby';
import React from 'react';

const DetailsPage = (props) => {
  console.log(props);
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

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        test {
          cool
          ok
        }
      }
    }
  }
`;

export default DetailsPage;
