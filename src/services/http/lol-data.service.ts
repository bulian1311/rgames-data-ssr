import { client, VERSION, LANG } from "./client";
import {
  TLolChampionShort,
  TResLolChampionFull,
  TResLolChampionShort,
  TLolItem,
} from "../../types";

class LolDataService {
  fetctChampions = async (): Promise<TLolChampionShort[]> => {
    try {
      const res = await client.get(
        `/cdn/${VERSION}/data/${LANG}/champion.json`
      );

      const resChampions: TResLolChampionShort[] = Object.values(res.data.data);

      const champions = resChampions.map((champ) => ({
        version: champ.version,
        id: champ.id,
        key: champ.key,
        name: champ.name,
        title: champ.title,
        image: champ.image.full,
        tags: champ.tags,
      }));

      return champions;
    } catch (err) {
      console.error(err);
      return [];
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

  fetchItems = async (): Promise<TLolItem[]> => {
    try {
      const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

      const resItems: TLolItem[] = Object.values(res.data.data);

      return resItems;
    } catch (err) {
      console.error(err);
      return [];
    }
  };
}

export const lolDataService = new LolDataService();
