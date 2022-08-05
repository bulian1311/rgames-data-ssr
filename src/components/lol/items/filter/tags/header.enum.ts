export enum headerMatching {
  START = "Старт",
  TOOLS = "Вспомогательное",
  DEFENSE = "Защита",
  ATTACK = "Атака",
  MAGIC = "Магия",
  MOVEMENT = "Передвижение",
  UNCATEGORIZED = "Без категории",
}

export type THeaderMatching =
  | "START"
  | "TOOLS"
  | "DEFENSE"
  | "ATTACK"
  | "MAGIC"
  | "MOVEMENT"
  | "UNCATEGORIZED";
