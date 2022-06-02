import { configure } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { UserStore } from "./user.store";

enableStaticRendering(typeof window === "undefined");
configure({ enforceActions: "always" });

export class RootStore {
  userStore: UserStore;

  constructor() {
    this.userStore = new UserStore(this);
  }
}
