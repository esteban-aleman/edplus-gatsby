import React from 'react';
import { Link } from 'components/shared';
// import { useTranslation } from 'lib/utils/i18n/useTranslation';
import * as styles from './DetailLayout.module.scss';
import { DetailLayoutProps } from './DetailLayoutProps';

const DetailLayout = (props: DetailLayoutProps) => {
  const { children } = props;

  const { t } = { t: (_s: string | undefined) => 'chamba' };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Link href={'/'} className={styles.link}>
          {t('go-back')}
        </Link>
      </div>
      {children}
    </div>
  );
};

export default DetailLayout;
