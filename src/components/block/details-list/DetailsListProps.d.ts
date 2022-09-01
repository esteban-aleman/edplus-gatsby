export type Detail = {
  title?: string | null;
  text?: string | null;
};

export type DetailsListProps = {
  details: Array<Detail | null>;
};
