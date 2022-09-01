import { TEXT_TAGS } from 'lib/utils/constants';

export type TextProps = {
  text?: string | null;
  tag?: TEXT_TAGS;
  className?: string;
};
