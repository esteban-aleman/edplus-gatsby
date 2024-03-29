import React from 'react';
import classnames from 'classnames';
import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './CarouselItem.module.scss';
import { CarouselItemProps } from './CarouselItemProps';

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  (props: CarouselItemProps, ref) => {
    const { image, title, description, id, active, ariaLabel, imageAlt } =
      props;

    return (
      <div
        className={classnames(styles.root, { [styles.inactive]: !active })}
        id={id}
        aria-label={ariaLabel}
        aria-hidden={!active}
        ref={ref}
        tabIndex={-1}
        role="group"
      >
        {image && (
          <div className={styles.image}>
            <GatsbyImage
              image={image}
              alt={imageAlt}
              className={styles.gatsbyImgWrapper}
            />
          </div>
        )}
        <div className={styles.textContent}>
          <Title
            className={styles.title}
            title={title}
            level={TITLE_TYPES.h3}
            type={TITLE_TYPES.h5}
          />
          <Text className={styles.text} text={description} />
        </div>
      </div>
    );
  }
);

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
