import { DEFAULT } from 'lib/utils/constants';
import { TextWithMediaCarouselProps } from './TextWithMediaCarouselProps';

const base: TextWithMediaCarouselProps = {
  id: DEFAULT.id,
  title: DEFAULT.string,
  description: DEFAULT.longString,
  carouselItems: [
    {
      image: null,
      imageAlt: DEFAULT.string,
      title: DEFAULT.string + 1,
      description: DEFAULT.longString,
      active: true,
    },
    {
      image: null,
      imageAlt: DEFAULT.string,
      title: DEFAULT.string + 2,
      description: DEFAULT.longString,
      active: false,
    },
    {
      image: null,
      imageAlt: DEFAULT.string,
      title: DEFAULT.string + 3,
      description: DEFAULT.longString,
      active: false,
    },
  ],
};

export const mockTextWithMediaCarouselProps = {
  base,
};
