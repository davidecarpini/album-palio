import { observable, action, asMap } from "mobx";
import { persist } from "mobx-persist";

export default class Lang {
  @persist
  @observable
  language = "it";

  @action
  setLanguage(newLanguage) {
    this.language = newLanguage;
  }
}
