import { TLolChampion } from '@types';

export type TChampionsActionType = 'search' | 'sort' | 'filter';

export type TSortValue = 'name' | 'ban';

export type TReducerState = {
  champions: TLolChampion[];
  renderChampions: TLolChampion[];
  search: string;
  sortValue: TSortValue;
  asc: boolean;
};

export type TChampionsAction = {
  type: TChampionsActionType;
  payload: {
    search: string;
    sortValue: TSortValue;
    asc: boolean;
  };
};

export const championsReducer = (
  state: TReducerState,
  action: TChampionsAction
): TReducerState => {
  switch (action.type) {
    case 'search':
      const filteredChampions = state.champions.filter((champ) => {
        if (!action.payload.search) return { ...state };

        const champRu = champ.name
          .toLocaleLowerCase()
          .includes(action.payload.search.toLocaleLowerCase());

        const champEng = champ.id
          .toLocaleLowerCase()
          .includes(action.payload.search.toLocaleLowerCase());

        return champRu || champEng;
      });

      return {
        ...state,
        renderChampions: filteredChampions,
        search: action.payload.search || '',
      };

    case 'sort':
      let sortedChampions = state.renderChampions;

      console.log(action.payload);

      if (action.payload.sortValue === 'name') {
        sortedChampions = state.renderChampions.slice().reverse();
      }

      return {
        ...state,
        renderChampions: sortedChampions,
        sortValue: action.payload.sortValue,
        asc: action.payload.asc,
      };
    default:
      throw new Error('Ошибка сортировки!');
  }
};
