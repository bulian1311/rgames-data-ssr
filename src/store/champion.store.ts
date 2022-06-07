import { makeObservable, observable, action } from "mobx";
import { dataService } from "../services";
import { RootStore } from "./root.store";

export class ChampionStore {
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

  fetchChampions = () => {
    const champions = dataService.fetctChampions();
    this.setChampions(champions);
  };
}
