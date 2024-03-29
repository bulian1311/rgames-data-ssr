export type TResLolItem = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into?: string[];
  from?: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    11: boolean;
    12: boolean;
    21: boolean;
    22: boolean;
  };
  stats: {
    FlatMovementSpeedMod: number;
  };
  effect?: {
    Effect1Amount: string;
    Effect2Amount: string;
  };
};

export type TLolItem = {
  id: string;
  name: string;
  image: string;
  gold: number;
  colloq: string;
  tags: string[];
};

export type TLolItemTree = {
  header: string;
  tags: string[];
};
