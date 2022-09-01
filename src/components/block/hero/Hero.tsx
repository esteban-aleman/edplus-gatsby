import React from 'react';
import { Link, Title } from 'components/shared';
import { CTA_TYPES, TITLE_TYPES } from 'lib/utils/constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './Hero.module.scss';
import { HeroProps } from './HeroProps';

const Hero = (props: HeroProps) => {
  const { backgroundImage, eyebrow, title, ctaText, ctaReferenceId } = props;

  return (
    <section className={styles.root}>
      {backgroundImage && (
        <GatsbyImage
          image={backgroundImage}
          alt={''}
          aria-hidden={true}
          role="presentation"
          className={styles.backgroundWrapper}
        />
      )}

      <div className={styles.content}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <Title
          title={title}
          type={TITLE_TYPES.h3}
          level={TITLE_TYPES.h1}
          className={styles.title}
        />
        <Link
          cta={CTA_TYPES.secondary}
          text={ctaText}
          href={`#${ctaReferenceId}`}
        />
      </div>
    </section>
  );
};

export default Hero;
