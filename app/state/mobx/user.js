import { observable, action, asMap } from "mobx";
import { persist } from "mobx-persist";

export default class User {
  @persist
  @observable
  token = undefined;

  @persist
  @observable
  displayName = undefined;

  @persist
  @observable
  firstName = undefined;

  @persist
  @observable
  lastName = undefined;

  @persist
  @observable
  phone = undefined;

  @action
  setToken(newToken) {
    this.token = newToken;
  }

  @action
  setDisplayName(newDisplayName) {
    this.displayName = newDisplayName;
  }

  @action
  setFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  @action
  setLastName(newLastName) {
    this.lastName = newLastName;
  }

  @action
  setPhone(newPhone) {
    this.phone = newPhone;
  }
}
