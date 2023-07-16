export interface Word {
  key: number;
  word: string;
  meaning: string;
  pronunciation: string;
}

export interface WordWithoutKey extends Omit<Word, "key"> {}
