import { configure } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { UserStore } from "./user.store";
import { ChampionStore } from "./champion.store";

enableStaticRendering(typeof window === "undefined");
configure({ enforceActions: "always" });

export class RootStore {
  userStore: UserStore;
  championStore: ChampionStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.championStore = new ChampionStore(this);
  }
}
