import { TLolChampion } from '@types';
import { TState } from './champions.reducer';

export const filterChampions = (champions: TLolChampion[], state: TState) => {
  let filteredChampions = champions;

  if (state.searchQery) {
    filteredChampions = champions.filter((champ) => {
      const champRu = champ.name
        .toLocaleLowerCase()
        .includes(state.searchQery.toLocaleLowerCase());

      const champEng = champ.id
        .toLocaleLowerCase()
        .includes(state.searchQery.toLocaleLowerCase());

      return champRu || champEng;
    });
  }

  if (!state.sortAsc && state.sortValue === 'name') {
    filteredChampions = champions.slice().reverse();
  }

  return filteredChampions;
};
