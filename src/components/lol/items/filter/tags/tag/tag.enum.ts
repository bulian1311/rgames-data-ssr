export enum tagMatching {
  LANE = "На линии",
  JUNGLE = "Лес",

  GOLDPER = "Золото",
  CONSUMABLE = "Расходники",
  VISION = "Обзор",

  HEALTH = "Здоровье",
  HEALTHREGEN = "Восстановление здоровья",
  ARMOR = "Защита",
  SPELLBLOCK = "Защита от умений",

  LIFESTEAL = "Вытягивание жизни",
  CRITICALSTRIKE = "Критический урон",
  ATTACKSPEED = "Скорость атаки",
  DAMAGE = "Урон",

  MANA = "Мана",
  SPELLDAMAGE = "Урон умениями",
  COOLDOWNREDUCTION = "Ускорение умений",
  MANAREGEN = "Восстановление маны",

  BOOTS = "Ботинки",
  NONBOOTSMOVEMENT = "Без ботинок",

  ACTIVE = "Акутив",
  MAGICPENETRATION = "Пробивание магии",
  ARMORPENETRATION = "Пробивание брони",
  AURA = "Аура",
  ONHIT = "Один удар",
  TRINKET = "Брелок",
  SLOW = "Замедление",
  STEALTH = "Скрытность",
  SPELLVAMP = "Вампиризм",
  TENACITY = "Стойкость",
}

export type TTagMatching =
  | "LANE"
  | "JUNGLE"
  | "GOLDPER"
  | "CONSUMABLE"
  | "VISION"
  | "HEALTH"
  | "HEALTHREGEN"
  | "ARMOR"
  | "SPELLBLOCK"
  | "LIFESTEAL"
  | "CRITICALSTRIKE"
  | "ATTACKSPEED"
  | "DAMAGE"
  | "MANA"
  | "SPELLDAMAGE"
  | "COOLDOWNREDUCTION"
  | "MANAREGEN"
  | "BOOTS"
  | "NONBOOTSMOVEMENT"
  | "ACTIVE"
  | "MAGICPENETRATION"
  | "ARMORPENETRATION"
  | "AURA"
  | "ONHIT"
  | "TRINKET"
  | "SLOW"
  | "STEALTH"
  | "SPELLVAMP"
  | "TENACITY";
