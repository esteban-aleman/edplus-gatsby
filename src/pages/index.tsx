import {
  CardsGrid,
  Hero,
  SimpleHero,
  TextWithMedia,
  TextWithMediaCarousel,
  Timeline,
} from 'components/block';
import { MainLayout } from 'components/layout';
import React, { useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  timelineEntries,
  activityCarouselItems,
  involvementCards,
} from 'lib/pages-data/home';
import { CTA_TYPES, SIMPLE_HERO_TYPES } from 'lib/utils/constants';
import { Link } from 'components/shared';
import * as styles from 'styles/pages/index.module.scss';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  const { t } = { t: (_s: string | undefined) => 'chamba' };

  const activitiesId = 'activities';
  const getInvolvedId = 'getInvolved';

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

  const mappedInvolvementCards = useMemo(() => {
    return involvementCards.map((c, i) => {
      return {
        ...c,
        image: data.cards?.nodes[i]
          ? data.cards?.nodes[i].childImageSharp?.gatsbyImageData
          : null,
        linkText: t(c.linkText),
        title: t(c.title),
        description: t(c.description),
        imageAlt: t(c.imageAlt),
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
      <SimpleHero
        type={SIMPLE_HERO_TYPES.primary}
        title={t('how-to-get-involved')}
        text={t('how-to-get-involved-description')}
        id={getInvolvedId}
      />
      <CardsGrid cards={mappedInvolvementCards} />
      <SimpleHero
        type={SIMPLE_HERO_TYPES.light}
        title={t('ready-to-get-involved')}
        text={t('ready-to-get-involved-description')}
      >
        <Link
          text={t('how-to-get-involved')}
          className={styles.getInvolvedButton}
          href={`#${getInvolvedId}`}
          cta={CTA_TYPES.primary}
        />
      </SimpleHero>
    </MainLayout>
  );
};

export const query = graphql`
  query IndexPage {
    hero: file(name: { eq: "hero" }) {
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
    cards: allFile(
      filter: { name: { regex: "/.*card-[0-9]+/" } }
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
