import React from 'react';
import cx from 'classnames';
import * as styles from './Title.module.scss';
import { TitleProps } from './TitleProps';

const Title = (props: TitleProps) => {
  const { id, title, type, level, className, ...rest } = props;
  const Tag = level;
  return (
    <Tag id={id} className={cx(styles[type], className)} {...rest}>
      {title}
    </Tag>
  );
};

export default Title;
