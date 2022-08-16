import { TITLE_TYPES } from 'lib/utils/constants';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export type TextWithMediaProps = {
  image: IGatsbyImageData | null | undefined;
  imageAlt: string;
  title: string;
  text?: string;
  children?: React.ReactNode;
  titleLevel?: TITLE_TYPES;
};
