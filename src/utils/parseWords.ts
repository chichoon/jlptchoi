import { Word } from "@/types/Words";

export function parseWords(words: string): Word[] {
  try {
    return words
      .trim()
      .split("\n")
      .map((word) => {
        const [wordValue, meaning, pronunciation] = word.split(",");
        if (!wordValue || !meaning || !pronunciation)
          throw new Error("입력 형식이 올바르지 않습니디");
        return { word: wordValue, pronunciation, meaning };
      });
  } catch (e: unknown) {
    throw e;
  }
}
