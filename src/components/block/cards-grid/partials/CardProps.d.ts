import { IGatsbyImageData } from 'gatsby-plugin-image';

export type CardProps = {
  image: IGatsbyImageData | null | undefined;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
};
