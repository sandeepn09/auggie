import { Injectable } from "@angular/core";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  async store(key: string, value: any) {
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await Storage.set({ key: key, value: encryptedValue });
  }

  async get(key: string) {
    const res = await Storage.get({ key: key });

    if (res.value) {
      return JSON.parse(unescape(atob(res.value)));
    } else {
      return false;
    }
  }

  async remove(key: string) {
    await Storage.remove({ key: key });
  }

  async clear() {
    await Storage.clear();
  }
}
