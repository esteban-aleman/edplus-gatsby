import { DEFAULT } from 'lib/utils/constants';
import { TextWithMediaProps } from './TextWithMediaProps';

const base: TextWithMediaProps = {
  image: null,
  imageAlt: DEFAULT.string,
  title: DEFAULT.string,
  text: DEFAULT.longString,
};

const withChildren: TextWithMediaProps = {
  image: null,
  imageAlt: DEFAULT.string,
  title: DEFAULT.string,
  text: DEFAULT.longString,
  children: DEFAULT.children,
};

export const mockTextWithMediaProps = {
  base,
  withChildren,
};
