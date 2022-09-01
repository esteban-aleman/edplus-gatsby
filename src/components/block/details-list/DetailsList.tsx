import { Text, Title } from 'components/shared';
import { TITLE_TYPES } from 'lib/utils/constants';
import * as styles from './DetailsList.module.scss';
import { DetailsListProps } from './DetailsListProps';
import React from 'react';

const DetailsList = (props: DetailsListProps) => {
  const { t } = { t: (_s: string | null | undefined) => 'chamba' };
  const { details } = props;
  return (
    <div>
      {details.map(
        (d) =>
          d && (
            <div key={d.title}>
              <Title
                title={t(d.title)}
                type={TITLE_TYPES.h5}
                level={TITLE_TYPES.h2}
                className={styles.title}
              />
              <Text text={t(d.text)} className={styles.text} />
            </div>
          )
      )}
    </div>
  );
};

export default DetailsList;
