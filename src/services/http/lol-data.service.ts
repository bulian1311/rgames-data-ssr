import { client, VERSION, LANG } from "./client";
import {
  TResLolChampionShort,
  TResLolChampionFull,
  TResLolItem,
  TResLolItemTree,
} from "@types";

class LolDataService {
  fetctChampions = async (): Promise<{
    [id: string]: TResLolChampionShort;
  }> => {
    try {
      const res = await client.get(
        `/cdn/${VERSION}/data/${LANG}/champion.json`
      );

      //const champions: TResLolChampionShort[] = Object.values(res.data.data);

      const champions: { [id: string]: TResLolChampionShort } = res.data.data;

      // const champions: TLolChampionShort[] = resChampions.map((champ) => {
      //   const champion = {
      //     version: champ.version,
      //     id: champ.id,
      //     key: champ.key,
      //     name: champ.name,
      //     title: champ.title,
      //     image: champ.id + "_0.jpg",
      //     tags: champ.tags,
      //   };

      //   if (champion.id === "Fiddlesticks") {
      //     champion.image = "FiddleSticks_0.jpg";
      //   }

      //   return champion;
      // });

      return champions;
    } catch (err) {
      console.error(err);
      return {};
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
    data: { [id: string]: TResLolItem };
    tree: TResLolItemTree[];
  }> => {
    try {
      const res = await client.get(`/cdn/${VERSION}/data/${LANG}/item.json`);

      // const resItems: TLolItem[] = Object.values(res.data.data);

      // const shortData: TLolItemShort[] = resItems.map((item) => ({
      //   name: item.name,
      //   image: item.image.full,
      //   gold: item.gold.total,
      //   tags: item.tags.map((t) => t.toUpperCase()),
      //   colloq: item.colloq,
      // }));

      // const data = shortData.filter((item) => {
      //   const exclude =
      //     item.name !== "Золотая лопатка" &&
      //     item.name !== "Награда за строение" &&
      //     item.name !== "Заглушка для Гангпланка" &&
      //     !item.name.includes("500 серебряных змей");

      //   return exclude;
      // });

      const data: { [id: string]: TResLolItem } = res.data.data;

      const tree: TResLolItemTree[] = res.data.tree;

      return { data, tree };
    } catch (err) {
      console.error(err);
      return { data: {}, tree: [] };
    }
  };
}

export const lolDataService = new LolDataService();
