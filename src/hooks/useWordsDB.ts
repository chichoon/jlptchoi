import { Word } from "@/types/Words";

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

export function useWordsDB() {
  async function getWordCount(): Promise<number> {
    const db = await dbPromise;
    if (!db) return 0;
    try {
      return db.transaction("words", "readwrite").objectStore("words").count()
        .result;
    } catch (_) {
      return 0;
    }
  }

  async function getWord(index: number): Promise<Word | null> {
    const db = await dbPromise;
    if (!db) return null;
    try {
      return db
        .transaction("words", "readwrite")
        .objectStore("words")
        .get(index).result;
    } catch (_) {
      return null;
    }
  }

  async function saveToDB(words: Word[]): Promise<void> {
    const db = await dbPromise;
    if (!db) return;
    try {
      const objectStore = db
        .transaction("words", "readwrite")
        .objectStore("words");
      words.forEach((word) => {
        let request = objectStore.put(word);
        request.onsuccess = function (e: Event) {};
      });
    } catch (_) {
      return; // TODO: error handling
    }
  }

  async function removeFromDB(index: number): Promise<void> {
    const db = await dbPromise;
    if (!db) return;
    try {
      return db
        .transaction("words", "readwrite")
        .objectStore("words")
        .delete(index).result;
    } catch (_) {
      return; // TODO: error handling
    }
  }

  function removeDB() {
    indexedDB.deleteDatabase("WordDB");
  }

  return { getWordCount, getWord, saveToDB, removeFromDB, removeDB };
}
