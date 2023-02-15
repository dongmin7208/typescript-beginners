interface SStorage<T> {
  [key: string]: T;
  // setItem(key: string, value: string): void;
}
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  static setItem: any;
  static getItem: any;
  static clearItem: any;
  static removeItem: any;
  static clear: any;
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
  setItem(key: string, value: T) {
    this.set(key, value);
  }
  getItem(key: string): T {
    return this.get(key);
  }
  removeItem(key: string) {
    this.remove(key);
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get('key');
stringsStorage.set('hello', 'world');

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx');

LocalStorage.setItem();
LocalStorage.getItem();
LocalStorage.removeItem();
LocalStorage.clear();
LocalStorage.clearItem();
