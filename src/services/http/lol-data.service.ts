import { client, VERSION, LANG } from './client';
import {
  TResLolChampionShort,
  TResLolChampionFull,
  TLolChampion,
  TResLolItem,
  TLolItemTree,
  TLolItem,
} from '@types';

export const fetchChampionsMap = async (): Promise<{
  [id: string]: TResLolChampionShort;
}> => {
  try {
    const res = await client.get(`/cdn/${VERSION}/data/${LANG}/champion.json`);

    const championsMap: { [id: string]: TResLolChampionShort } = res.data.data;

    return championsMap;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const fetctChampions = async (): Promise<TLolChampion[]> => {
  try {
    const res = await client.get(`/cdn/${VERSION}/data/${LANG}/champion.json`);

    const championsArray: TResLolChampionShort[] = Object.values(res.data.data);

    const champions = championsArray.map((champ) => {
      const champion = {
        id: champ.id,
        key: champ.key,
        name: champ.name,
        image: champ.id + '_0.jpg',
      };

      if (champion.id === 'Fiddlesticks') {
        champion.image = 'FiddleSticks_0.jpg';
      }

      return champion;
    });

    return champions;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchChampion = async (
  id: string
): Promise<TResLolChampionFull | null> => {
  try {
    const res = await client.get(
      `/cdn/${VERSION}/data/${LANG}/champion/${id}.json`
    );

    const champion: TResLolChampionFull = res.data.data[id];

    return champion;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const fetchItemsMap = async (): Promise<{
  [id: string]: TResLolItem;
}> => {
  try {
    const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

    const itemsMap: { [id: string]: TResLolItem } = res.data.data;

    return itemsMap;
  } catch (err) {
    console.error(err);
    return {};
  }
};

export const fetchItemsTree = async (): Promise<TLolItemTree[]> => {
  try {
    const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

    const tree: TLolItemTree[] = res.data.tree;

    return tree;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const fetchItems = async (): Promise<TLolItem[]> => {
  try {
    const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

    const itemsArray: [string, TResLolItem][] = Object.entries(res.data.data);

    const itemsArrayShort: TLolItem[] = itemsArray.map((item) => {
      return {
        id: item[0],
        name: item[1].name,
        image: item[1].image.full,
        gold: item[1].gold.total,
        colloq: item[1].colloq,
        tags: item[1].tags.map((t) => t.toUpperCase()),
      };
    });

    const items = itemsArrayShort.filter((item) => {
      const exclude =
        item.name !== 'Золотая лопатка' &&
        item.name !== 'Награда за строение' &&
        item.name !== 'Заглушка для Гангпланка' &&
        !item.name.includes('500 серебряных змей');

      return exclude;
    });

    return items;
  } catch (err) {
    console.error(err);
    return [];
  }
};
