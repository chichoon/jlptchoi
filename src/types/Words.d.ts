export interface Word {
  word: string;
  meaning: string;
  pronunciation: string;
}

export interface WordRecord extends Word {
  key: number;
}
