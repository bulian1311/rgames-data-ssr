import { makeObservable, observable, action } from "mobx";

import { RootStore } from "./root.store";

export class UserStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this, {
      username: observable,
      setUsername: action,
    });
  }

  username: string = "username";

  setUsername = (value: string) => {
    this.username = value;
  };
}
