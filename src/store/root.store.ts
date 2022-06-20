import { configure } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { UserStore } from "./user.store";
import { LolStore } from "./lol.store";

enableStaticRendering(typeof window === "undefined");
configure({ enforceActions: "always" });

export type RootStoreHydration = {
  lolStore?: LolStore;
};

export class RootStore {
  userStore: UserStore;
  lolStore: LolStore;

  constructor() {
    this.userStore = new UserStore(this);
    this.lolStore = new LolStore(this);
  }

  hydrate(data: RootStoreHydration) {
    // check if there is data for this particular store
    if (data.lolStore) {
      this.lolStore.hydrate(data.lolStore);
    }
  }
}
