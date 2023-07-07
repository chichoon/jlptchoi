export function removeDB() {
  const indexedDB = window.indexedDB;
  if (!indexedDB) {
    window.alert("해당 브라우저에서는 Indexed DB를 지원하지 않습니다.");
    return; // TODO: throw로 바꾸기
  }
  window.indexedDB.deleteDatabase("WordDB");
}
