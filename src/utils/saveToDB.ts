import { Word } from "@/types/Words";

export function saveToDB(words: Word[]) {
  const indexedDB = window.indexedDB;
  if (!indexedDB) {
    window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
    return; // TODO: throw로 바꾸기
  }
  const request = indexedDB.open("WordDB");
  request.onerror = function (e: Event) {
    console.log("Database error: ", e);
  };

  request.onsuccess = function (e: Event) {
    const db = request.result;
    const transaction = db.transaction("words", "readwrite");
    transaction.onerror = function (e: Event) {
      // TODO : error handling
    };
    const objectStore = transaction.objectStore("words");
    words.forEach((word) => {
      let request = objectStore.add(word);
      request.onsuccess = function (e: Event) {};
    });
  };
}
