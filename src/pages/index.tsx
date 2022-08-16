import {
  Hero,
  TextWithMedia,
  TextWithMediaCarousel,
  Timeline,
} from 'components/block';
import { MainLayout } from 'components/layout';
import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';
import { timelineEntries, activityCarouselItems } from 'lib/pages-data/home';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const { t } = { t: (_s: string | undefined) => 'chamba' };

  const activitiesId = 'activities';
  // const getInvolvedId = 'getInvolved';

  const mappedTimeLineEntries = useMemo(() => {
    return timelineEntries.map((e) => {
      return {
        date: t(e.date),
        title: t(e.title),
        description: t(e.description),
      };
    });
  }, [t]);

  const mappedActivities = useMemo(() => {
    return activityCarouselItems.map((a, i) => {
      return {
        ...a,
        image: data.textWithMediaCarousel?.nodes[i]
          ? data.textWithMediaCarousel?.nodes[i].childImageSharp
              ?.gatsbyImageData
          : null,
        title: t(a.title),
        description: t(a.description),
        imageAlt: t(a.imageAlt),
      };
    });
  }, [t]);

  return (
    <MainLayout>
      <title>Home Page</title>
      <Hero
        eyebrow={t('hero-eyebrow')}
        title={t('hero-title')}
        ctaText={t('hero-cta')}
        backgroundImage={data.hero?.childImageSharp?.gatsbyImageData}
        ctaReferenceId={activitiesId}
      />
      <TextWithMedia
        title={t('who-are-we')}
        text={t('who-is-edplus')}
        image={data.textWithMedia?.childImageSharp?.gatsbyImageData}
        imageAlt={t('who-are-we-image-alt')}
      />
      <Timeline
        entries={mappedTimeLineEntries}
        title={t('where-do-we-come-from')}
      />
      <TextWithMediaCarousel
        title={t('activities')}
        description={t('activities-description')}
        carouselItems={mappedActivities}
        id={activitiesId}
      />
    </MainLayout>
  );
};

export const query = graphql`
  query IndexPage {
    hero: file(name: { eq: "hero1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    textWithMedia: file(name: { eq: "team1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    textWithMediaCarousel: allFile(
      filter: { name: { regex: "/.*activity-[0-9]+/" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
        name
      }
    }
  }
`;

export default IndexPage;
