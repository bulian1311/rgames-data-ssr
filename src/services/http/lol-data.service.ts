import { client, VERSION, LANG } from "./client";
import { TLolChampionShort } from "../../types";

class LolDataService {
  fetctChampions = async (): Promise<TLolChampionShort[]> => {
    try {
      const res = await client.get(
        `/cdn/${VERSION}/data/${LANG}/champion.json`
      );

      const champions: TLolChampionShort[] = Object.values(res.data.data);

      return champions;
    } catch (err) {
      console.error(err);
      return [];
    }
  };
}

export const lolDataService = new LolDataService();
