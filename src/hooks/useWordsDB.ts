import { Word } from "@/types/Words";

export function useWordsDB() {
  const dbPromise = new Promise<IDBDatabase | null>((resolve, reject) => {
    const indexedDB = window.indexedDB;
    if (!indexedDB) {
      window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
      return; // TODO: throw로 바꾸기
    }

    const request = indexedDB.open("WordDB");

    request.onsuccess = function (e: Event) {
      resolve(e.target?.result ?? null);
    };
    request.onerror = function (e: Event) {
      reject(e);
    };
    request.onupgradeneeded = function (e: Event) {
      const db = request.result;
      const objectStore = db.createObjectStore("words", {
        autoIncrement: true,
      });
      objectStore.createIndex("word", "word", { unique: true });
      objectStore.createIndex("meaning", "meaning", { unique: false });
      objectStore.createIndex("pronunciation", "pronunciation", {
        unique: false,
      });
    };
  });

  async function getWordCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        if (!db) {
          reject("DB is not initialized");
          return;
        }
        const result = db
          .transaction("words", "readwrite")
          .objectStore("words")
          .count();
        result.onsuccess = function (e: Event) {
          resolve(result.result);
        };
        result.onerror = function (e: Event) {
          reject(e.target?.error ?? "DB Count Error");
        };
      });
    });
  }

  async function getWord(index: number): Promise<Word | null> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        if (!db) {
          reject("DB is not initialized");
          return;
        }
        const result = db
          .transaction("words", "readwrite")
          .objectStore("words")
          .get(index);
        result.onsuccess = function (e: Event) {
          resolve(result.result);
        };
        result.onerror = function (e: Event) {
          reject(e.target?.error ?? "DB Get Error");
        };
      });
    });
  }

  async function saveToDB(words: Word[]): Promise<void> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        if (!db) {
          reject("DB is not initialized");
          return;
        }
        const objectStore = db
          .transaction("words", "readwrite")
          .objectStore("words");
        words.forEach((word) => {
          let request = objectStore.put(word);
          request.onerror = function (e: Event) {
            reject("DB Save Error");
          };
        });
        resolve();
      });
    });
  }

  async function removeFromDB(index: number): Promise<void> {
    return new Promise((resolve, reject) => {
      dbPromise.then((db) => {
        if (!db) {
          reject("DB is not initialized");
          return;
        }
        const result = db
          .transaction("words", "readwrite")
          .objectStore("words")
          .delete(index);
        result.onsuccess = function (e: Event) {
          resolve();
        };
        result.onerror = function (e: Event) {
          reject(e.target?.error ?? "DB Remove Error");
        };
      });
    });
  }

  function removeDB() {
    const indexedDB = window.indexedDB;
    if (!indexedDB) {
      window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
      return; // TODO: throw로 바꾸기
    }
    indexedDB.deleteDatabase("WordDB");
  }

  return { getWordCount, getWord, saveToDB, removeFromDB, removeDB };
}
