export enum tagMatching {
  LANE = 'На линии',
  JUNGLE = 'Лес',

  GOLDPER = 'Золото',
  CONSUMABLE = 'Расходники',
  VISION = 'Обзор',

  HEALTH = 'Здоровье',
  HEALTHREGEN = 'Восстановление здоровья',
  ARMOR = 'Защита',
  SPELLBLOCK = 'Защита от умений',

  LIFESTEAL = 'Вытягивание жизни',
  CRITICALSTRIKE = 'Критический урон',
  ATTACKSPEED = 'Скорость атаки',
  DAMAGE = 'Урон',

  MANA = 'Мана',
  SPELLDAMAGE = 'Урон умениями',
  COOLDOWNREDUCTION = 'Ускорение умений',
  MANAREGEN = 'Восстановление маны',
  //ABILITYHASTE = "Ускорение умений",

  BOOTS = 'Ботинки',
  NONBOOTSMOVEMENT = 'Ускорение',

  ACTIVE = 'Активный',
  MAGICPENETRATION = 'Пробивание магии',
  ARMORPENETRATION = 'Пробивание брони',
  AURA = 'Аура',
  ONHIT = 'Один удар',
  TRINKET = 'Брелок',
  SLOW = 'Замедление',
  STEALTH = 'Скрытность',
  SPELLVAMP = 'Вампиризм',
  TENACITY = 'Стойкость',
}

export type TTagMatching =
  | 'LANE'
  | 'JUNGLE'
  | 'GOLDPER'
  | 'CONSUMABLE'
  | 'VISION'
  | 'HEALTH'
  | 'HEALTHREGEN'
  | 'ARMOR'
  | 'SPELLBLOCK'
  | 'LIFESTEAL'
  | 'CRITICALSTRIKE'
  | 'ATTACKSPEED'
  | 'DAMAGE'
  | 'MANA'
  | 'SPELLDAMAGE'
  | 'COOLDOWNREDUCTION'
  | 'MANAREGEN'
  | 'BOOTS'
  | 'NONBOOTSMOVEMENT'
  | 'ACTIVE'
  | 'MAGICPENETRATION'
  | 'ARMORPENETRATION'
  | 'AURA'
  | 'ONHIT'
  | 'TRINKET'
  | 'SLOW'
  | 'STEALTH'
  | 'SPELLVAMP'
  | 'TENACITY';
//| "ABILITYHASTE";

export enum headerMatching {
  START = 'Старт',
  TOOLS = 'Вспомогательное',
  DEFENSE = 'Защита',
  ATTACK = 'Атака',
  MAGIC = 'Магия',
  MOVEMENT = 'Передвижение',
  UNCATEGORIZED = 'Без категории',
}

export type THeaderMatching =
  | 'START'
  | 'TOOLS'
  | 'DEFENSE'
  | 'ATTACK'
  | 'MAGIC'
  | 'MOVEMENT'
  | 'UNCATEGORIZED';
