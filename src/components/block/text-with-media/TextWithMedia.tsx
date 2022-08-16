import React from 'react';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './TextWithMedia.module.scss';
import { TextWithMediaProps } from './TextWithMediaProps';

const TextWithMedia = (props: TextWithMediaProps) => {
  const { title, text, image, children, titleLevel, imageAlt } = props;
  return (
    <section className={styles.root}>
      <div className={styles.contentLeft}>
        <Title
          title={title}
          type={TITLE_TYPES.h3}
          level={titleLevel || TITLE_TYPES.h2}
          className={styles.title}
        />
        {text && <Text text={text} className={styles.text} />}
        {children}
      </div>
      <div className={styles.contentRight}>
        {image && (
          <div className={styles.image}>
            <GatsbyImage
              className={styles.gatsbyImgWrapper}
              image={image}
              alt={imageAlt}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TextWithMedia;
