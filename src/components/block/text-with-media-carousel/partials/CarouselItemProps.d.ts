import { IGatsbyImageData } from 'gatsby-plugin-image';

export type CarouselItemProps = {
  image: IGatsbyImageData | null | undefined;
  imageAlt: string;
  title: string;
  description: string;
  ariaLabel?: string;
  id?: string;
  active?: boolean;
};
