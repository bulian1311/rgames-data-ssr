import { client, VERSION, LANG } from './client';
import {
  TResLolChampionShort,
  TResLolChampionFull,
  TLolChampionItem,
  TResLolItem,
  TResLolItemTree,
  TLolItem,
} from '@types';

class LolDataService {
  fetctChampions = async (): Promise<{
    champions: { [id: string]: TResLolChampionShort };
    championsArray: TLolChampionItem[];
  }> => {
    try {
      const res = await client.get(
        `/cdn/${VERSION}/data/${LANG}/champion.json`
      );

      const champions: { [id: string]: TResLolChampionShort } = res.data.data;

      const array: TResLolChampionShort[] = Object.values(res.data.data);

      const championsArray = array.map((champ) => {
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

      return { champions, championsArray };
    } catch (err) {
      console.error(err);
      return { champions: {}, championsArray: [] };
    }
  };

  fetchChampion = async (id: string): Promise<TResLolChampionFull | null> => {
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

  fetchItems = async (): Promise<{
    items: { [id: string]: TResLolItem };
    itemsArray: TLolItem[];
    tree: TResLolItemTree[];
  }> => {
    try {
      const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

      const dataArray: [string, TResLolItem][] = Object.entries(res.data.data);

      const shortData: TLolItem[] = dataArray.map((item) => {
        return {
          id: item[0],
          name: item[1].name,
          image: item[1].image.full,
          gold: item[1].gold.total,
          tags: item[1].tags.map((t) => t.toUpperCase()),
          colloq: item[1].colloq,
        };
      });

      const itemsArray = shortData.filter((item) => {
        const exclude =
          item.name !== 'Золотая лопатка' &&
          item.name !== 'Награда за строение' &&
          item.name !== 'Заглушка для Гангпланка' &&
          !item.name.includes('500 серебряных змей');

        return exclude;
      });

      const items: { [id: string]: TResLolItem } = res.data.data;

      const tree: TResLolItemTree[] = res.data.tree;

      return { items, itemsArray, tree };
    } catch (err) {
      console.error(err);
      return { items: {}, tree: [], itemsArray: [] };
    }
  };
}

export const lolDataService = new LolDataService();
