import { emojis } from "../constants/emoji.constants";

export function getRandomListOfEmojis() {
  const emojiList = emojis.splice(0, 8);

  const finalResult = [...emojiList, ...emojiList];

  // shuffle emojis
  for (let index = 0; index < finalResult.length; index++) {
    const randomIndex = parseInt(Math.random() * finalResult.length);
    [finalResult[index], finalResult[randomIndex]] = [
      finalResult[randomIndex],
      finalResult[index],
    ];
  }

  return finalResult;
}
