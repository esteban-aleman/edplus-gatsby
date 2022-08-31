import React from 'react';
import { Link, Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import * as styles from './Card.module.scss';
import { CardProps } from './CardProps';
import { GatsbyImage } from 'gatsby-plugin-image';

const Card = (props: CardProps) => {
  const { image, title, description, linkText, linkUrl, imageAlt } = props;
  return (
    <li className={styles.root}>
      <div className={styles.imageContainer}>
        {image && (
          <div className={styles.image}>
            <GatsbyImage
              image={image}
              alt={imageAlt}
              class={styles.gatsbyImgWrapper}
            />
          </div>
        )}
      </div>
      <div className={styles.bottomContainer}>
        <div>
          <Title
            className={styles.title}
            title={title}
            level={TITLE_TYPES.h3}
            type={TITLE_TYPES.h4}
          />
          <Text className={styles.text} text={description} />
        </div>
        <Link className={styles.link} href={linkUrl}>
          {linkText}
        </Link>
      </div>
    </li>
  );
};

export default Card;
