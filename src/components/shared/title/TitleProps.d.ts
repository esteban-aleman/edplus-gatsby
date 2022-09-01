import { TITLE_TYPES } from 'lib/utils/constants';

export type TitleProps = {
  id?: string;
  title?: string | null;
  type: TITLE_TYPES;
  level: TITLE_TYPES;
  className?: string;
};
