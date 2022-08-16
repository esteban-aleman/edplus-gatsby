import { IGatsbyImageData } from 'gatsby-plugin-image';

export type HeroProps = {
  eyebrow: string;
  title: string;
  ctaText: string;
  backgroundImage: IGatsbyImageData | null | undefined;
  ctaReferenceId: string;
};
