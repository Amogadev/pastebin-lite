const memory = new Map();

export const store = {
  set(key, value) {
    memory.set(key, value);
  },
  get(key) {
    return memory.get(key);
  },
};
