export class LocalStorage {
  static setItem<T>(key: string, value: T): void {
    let stringValue: string;
    if (typeof value === 'string') {
      stringValue = value;
    } else {
      stringValue = JSON.stringify(value);
    }
    localStorage.setItem(key, stringValue);
  }

  static getItem<T>(key: string): T | undefined {
    const stringValue = localStorage.getItem(key);
    if (stringValue === null) {
      return undefined;
    }

    try {
      return JSON.parse(stringValue) as T;
    } catch (e) {
      return stringValue as unknown as T;
    }
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  static clear(): void {
    localStorage.clear();
  }
}
