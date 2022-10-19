export type TChampionsActionType = 'search' | 'sort';
export type TSortValue = 'name' | 'ban';

export type TState = {
  searchQery: string;
  sortValue: TSortValue;
  sortAsc: boolean;
};

export type TChampionsAction = {
  type: TChampionsActionType;
  payload: string;
};

export const ChampionsReducer = (
  state: TState,
  { type, payload }: TChampionsAction
): TState => {
  switch (type) {
    case 'search':
      return {
        ...state,
        searchQery: payload,
      };

    case 'sort':
      const existTag = state;

    default:
      throw new Error('Ошибка сортировки!');
  }
};
