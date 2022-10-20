import { TLolItem } from '@types';
import { TState } from './items.reducer';

export const filterItems = (items: TLolItem[], state: TState) => {
  let filteredItems = items;
  const { searchQery, activeTags } = state;

  if (searchQery) {
    filteredItems = filteredItems.filter((item) => {
      const itemRu = item.name
        .toLocaleLowerCase()
        .includes(searchQery.toLocaleLowerCase());

      const itemEn = item.colloq
        .toLocaleLowerCase()
        .includes(searchQery.toLocaleLowerCase());

      return itemRu || itemEn;
    });
  }

  if (activeTags.length > 0) {
    filteredItems = filteredItems.filter((item) => {
      let includeTag = activeTags.every((tag) => item.tags.includes(tag));

      return includeTag;
    });
  }

  return filteredItems;
};
