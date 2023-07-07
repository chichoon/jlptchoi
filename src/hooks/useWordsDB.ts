import { Word } from "@/types/Words";

export function useWordsDB() {
  const indexedDB = window.indexedDB;
  if (!indexedDB) {
    window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
    return; // TODO: throw로 바꾸기
  }

  const request = indexedDB.open("WordDB");
  request.onerror = function (e: Event) {
    throw Error("database error");
  };
  const db = request.result;

  function getWordCount() {
    const result = db
      .transaction("words", "readwrite")
      .objectStore("words")
      .count();
    result.onsuccess = function (e: Event) {
      return result;
    };
    result.onerror = function (e: Event) {
      return 0;
    };
    return result.result;
  }

  function getWord(index: number) {
    const result = db
      .transaction("words", "readwrite")
      .objectStore("words")
      .get(index);
    result.onsuccess = function (e: Event) {
      return result;
    };
    result.onerror = function (e: Event) {};
    return result.result;
  }

  function saveToDB(words: Word[]) {
    const transaction = db.transaction("words", "readwrite");
    transaction.onerror = function (e: Event) {
      console.log(e.target);
    };
    const objectStore = transaction.objectStore("words");
    words.forEach((word) => {
      let request = objectStore.put(word);
      request.onsuccess = function (e: Event) {};
    });
  }

  function removeFromDB(index: number) {
    const transaction = db.transaction("words", "readwrite");
    transaction.onerror = function (e: Event) {
      // TODO : error handling
    };
    const result = transaction.objectStore("words").delete(index);
    result.onsuccess = function (e: Event) {};
    result.onerror = function (e: Event) {};
  }

  function removeDB() {
    indexedDB.deleteDatabase("WordDB");
  }

  return { getWordCount, getWord, saveToDB, removeFromDB, removeDB };
}
