type TSkin = {
  id: string;
  num: 0;
  name: string;
  chromas: boolean;
};

type TSpell = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string[];
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: {};
  effect: number[][];
  effectBurn: string[];
  vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  resource: string;
};

type TImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type TInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type TStats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

export type TLolChampionShort = {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: TInfo;
  image: TImage;
  tags: string[];
  partype: string;
  stats: TStats;
};

export type TLolChampionFull = {
  type: string;
  format: string;
  version: string;
  data: {
    Aatrox: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: TImage;
      skins: TSkin[];
      lore: string;
      blurb: string;
      allytips: string[];
      enemytips: string[];
      tags: string[];
      partype: string;
      info: TInfo;
      stats: TStats;
      spells: TSpell[];
      passive: {
        name: string;
        description: string;
        image: {
          full: string;
          sprite: string;
          group: string;
          x: number;
          y: number;
          w: number;
          h: number;
        };
      };
      recommended: [];
    };
  };
};
