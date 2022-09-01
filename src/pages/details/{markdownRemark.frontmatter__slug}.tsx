import { DetailsList, TextWithMedia } from 'components/block';
import { DetailLayout, MainLayout } from 'components/layout';
import { graphql, PageProps } from 'gatsby';
import { TITLE_TYPES } from 'lib/utils/constants';
import React from 'react';

const DetailsPage = ({ data }: PageProps<Queries.DetailsPageQuery>) => {
  const { t } = { t: (_s: string | null | undefined) => 'chamba' };

  const mdData = data.markdownRemark?.frontmatter;

  return (
    <MainLayout>
      <DetailLayout>
        <title>Details Page</title>
        <TextWithMedia
          title={t(mdData?.title)}
          titleLevel={TITLE_TYPES.h1}
          text={t(mdData?.description)}
          image={mdData?.image?.childImageSharp?.gatsbyImageData}
          imageAlt={t(mdData?.image_alt)}
        >
          {mdData?.details && <DetailsList details={[...mdData.details]} />}
        </TextWithMedia>
      </DetailLayout>
    </MainLayout>
  );
};

export const query = graphql`
  query DetailsPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          }
        }
        image_alt
        details {
          title
          text
        }
      }
    }
  }
`;

export default DetailsPage;
