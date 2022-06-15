export type TSubLink = {
  name: string;
  to: string;
};

export type TNavLink = {
  name: string;
  to: string;
  sublinks?: TSubLink[];
};
