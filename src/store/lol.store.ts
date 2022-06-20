import { makeObservable, observable, action } from "mobx";
import { lolDataService } from "../services";
import { RootStore } from "./root.store";

export type TLolHydration = {
  champions: any[];
};

export class LolStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      champions: observable,
      setChampions: action,
    });
  }

  champions: any[] = [];

  setChampions = (value: any) => {
    this.champions = value;
  };

  fetchChampions = async () => {
    const champions = await lolDataService.fetctChampions();
    this.setChampions(champions);
  };

  hydrate(data?: TLolHydration) {
    if (data) {
      this.champions = data.champions;
    }
  }
}
