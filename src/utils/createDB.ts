export function createDB() {
  const indexedDB = window.indexedDB;
  let db;
  if (!indexedDB) {
    window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
    return;
  } // TODO: Throw로 바꾸기
  const request = indexedDB.open("WordDB");
  request.onerror = function (e: Event) {
    console.log("Database error: ", e);
    // TODO : Throw로 바꾸기
  };
  request.onupgradeneeded = function (e: Event) {
    db = request.result;
    const objectStore = db.createObjectStore("words", {
      autoIncrement: true,
    });
    objectStore.createIndex("word", "word", { unique: false });
    objectStore.createIndex("meaning", "meaning", { unique: false });
    objectStore.createIndex("pronunciation", "pronunciation", {
      unique: false,
    });
  };
  request.onsuccess = function (e: Event) {
    db = request.result;
  };
}
