// import { createSelector } from '@reduxjs/toolkit';
// import { selectItemsFilterSearch, selectItemsFilterTags } from './filter.slice';
// import { RootState } from '@store';

// const selectState = (state: RootState) => state.lolItems;

// const selectFilteredItems = createSelector(
//   [selectState, selectItemsFilterSearch, selectItemsFilterTags],
//   (state, itemSearch, itemTags) => {
//     let filteredItems = state.itemsArray;

//     if (itemSearch) {
//       filteredItems = filteredItems.filter((item) => {
//         const itemRu = item.name
//           .toLocaleLowerCase()
//           .includes(itemSearch.toLocaleLowerCase());

//         const itemEn = item.colloq
//           .toLocaleLowerCase()
//           .includes(itemSearch.toLocaleLowerCase());

//         return itemRu || itemEn;
//       });
//     }

//     if (itemTags.length > 0) {
//       filteredItems = filteredItems.filter((item) => {
//         let includeTag = itemTags.every((tag) => item.tags.includes(tag));

//         return includeTag;
//       });
//     }

//     return filteredItems;
//   }
// );

// export const selectItems = createSelector(
//   [selectFilteredItems],
//   (items) => items
// );

// export const selectItemById = (id: string) =>
//   createSelector([selectState], (state) => state.items[id]);
