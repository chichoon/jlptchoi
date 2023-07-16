import { Word, WordWithoutKey } from "@/types/Words";

export function useWordsDB() {
  const dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
    if (typeof window === "undefined") {
      reject("window is not initialized");
    }

    const indexedDB = window.indexedDB;
    if (!indexedDB) {
      window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
      reject("Indexed DB is not supported");
    }

    const request = indexedDB.open("WordDB");

    request.onsuccess = function () {
      resolve(request.result);
    };
    request.onerror = function () {
      reject(request.error);
    };
    request.onupgradeneeded = function () {
      const db = request.result;
      const objectStore = db.createObjectStore("words", {
        keyPath: "key",
        autoIncrement: true,
      });
      objectStore.createIndex("key", "key", { unique: true });
      objectStore.createIndex("word", "word", { unique: true });
      objectStore.createIndex("meaning", "meaning", { unique: false });
      objectStore.createIndex("pronunciation", "pronunciation", {
        unique: false,
      });
    };
  });

  async function getWord(index: number): Promise<Word> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        const result = db
          .transaction(["words"], "readwrite")
          .objectStore("words")
          .get(index);
        result.onsuccess = function () {
          resolve(result.result);
        };
        result.onerror = function () {
          reject(result.error);
        };
      });
    });
  }

  async function getAllWords(): Promise<Word[]> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        const result = db
          .transaction(["words"], "readwrite")
          .objectStore("words")
          .getAll();
        result.onsuccess = function () {
          console.log(result.result);
          resolve(result.result);
        };
        result.onerror = function () {
          reject(result.error);
        };
      });
    });
  }

  async function saveToDB(words: WordWithoutKey[]): Promise<void> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        const objectStore = db
          .transaction(["words"], "readwrite")
          .objectStore("words");
        words.forEach((word) => {
          let request = objectStore.put(word);
          request.onerror = function () {
            reject(request.error);
          };
        });
        resolve();
      });
    });
  }

  async function removeFromDB(index: number): Promise<void> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        const result = db
          .transaction(["words"], "readwrite")
          .objectStore("words")
          .delete(index);
        result.onsuccess = function () {
          resolve();
        };
        result.onerror = function () {
          reject(result.error);
        };
      });
    });
  }

  async function clearDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        const result = db
          .transaction(["words"], "readwrite")
          .objectStore("words")
          .clear();
        result.onsuccess = function () {
          resolve();
        };
        result.onerror = function () {
          reject(result.error);
        };
      });
    });
  }

  return {
    getWord,
    getAllWords,
    saveToDB,
    removeFromDB,
    clearDB,
  };
}
