import { Word } from "@/types/Words";

export function removeFromDB(index: number) {
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
    const result = transaction.objectStore("words").delete(index);
    result.onsuccess = function (e: Event) {};
    result.onerror = function (e: Event) {};
  };
}
