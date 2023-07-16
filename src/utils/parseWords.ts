import { WordWithoutKey } from "@/types/Words";

export function parseWords(words: string): WordWithoutKey[] | null {
  try {
    return words
      .trim()
      .split("\n")
      .map((word) => {
        const [wordValue, meaning, pronunciation] = word.split(",");
        if (!wordValue || !meaning || !pronunciation) {
          throw "입력 형식이 올바르지 않습니디";
        }
        return { word: wordValue, pronunciation, meaning };
      });
  } catch (e) {
    alert(e);
    return null;
  }
}
