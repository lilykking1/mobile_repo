jest.mock('react-native-mmkv', () => ({
  MMKV () {

    const storage = new Map<string, string | boolean | number>();

    return {
        set: (key: string, value: string): void => {
            storage.set(key, value);
        },
        getString: (key: string): string | undefined => {
            const result = storage.get(key);
            if (typeof result === "string") { return result };
            return undefined;
        },
        getNumber: (key: string): number | undefined => {
            const result = storage.get(key);
            if (typeof result === "number") { return result };
            return undefined;
        },
        getBoolean: (key: string): boolean | undefined => {
            const result = storage.get(key);
            if (typeof result === "boolean") { return result };
            return undefined;
        },
        contains: (key: string): boolean => storage.has(key),
        delete: (key: string) => {
            storage.delete(key);
        },
        getAllKeys: () => storage.keys(),
        clearAll: () => storage.clear(),
        recrypt: () => {
            console.warn('Encryption is not supported in mocked MMKV instances!');
        },
        addOnValueChangedListener: () => {
            console.warn('Value-changed listeners are not supported in mocked MMKV instances!');
        }
    };
  }
}));