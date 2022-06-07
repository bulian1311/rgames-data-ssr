import { client, VERSION, LANG } from "./client";

class DataService {
  fetctChampions = async () => {
    try {
      const res = await client.get(
        `/cdn/${VERSION}/data/${LANG}/champion.json`
      );

      return Object.values(res.data.data);
    } catch (err) {
      console.error(err);
      return [];
    }
  };
}

export const dataService = new DataService();
