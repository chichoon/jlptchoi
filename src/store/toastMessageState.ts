import { atom } from "recoil";

export const toastMessageState = atom<string | null>({
  key: "toastMessageState",
  default: null,
});
