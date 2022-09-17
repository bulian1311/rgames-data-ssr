import { createSelector } from '@reduxjs/toolkit';
// import { RootState } from '@store';
// import { TLolChampionItem } from '@types';
// import { selectChampionsFilterSearch } from './filter.slice';
// import { selectSortAsc, selectSortValue } from './sort.slice';

// const selectState = (state: RootState) => state.lolChampions;

// const selectChampionsArray = createSelector(
//   [selectState],
//   (champions): TLolChampionItem[] => champions.championsArray
// );

// const selectFilteredChampions = createSelector(
//   [selectChampionsArray, selectChampionsFilterSearch],
//   (champions, filterSearch) => {
//     let filteredChampions = champions;

//     if (filterSearch) {
//       filteredChampions = champions.filter((champ) => {
//         const champRu = champ.name
//           .toLocaleLowerCase()
//           .includes(filterSearch.toLocaleLowerCase());

//         const champEng = champ.id
//           .toLocaleLowerCase()
//           .includes(filterSearch.toLocaleLowerCase());

//         return champRu || champEng;
//       });
//     }

//     return filteredChampions;
//   }
// );

// const selectSortChampions = createSelector(
//   [selectFilteredChampions, selectSortAsc, selectSortValue],
//   (champions, asc, value) => {
//     let sortedChampions = champions;

//     if (!asc && value === 'name') {
//       sortedChampions = champions.slice().reverse();
//     }

//     return sortedChampions;
//   }
// );

// export const selectChampions = createSelector(
//   [selectSortChampions],
//   (champions) => champions
// );
