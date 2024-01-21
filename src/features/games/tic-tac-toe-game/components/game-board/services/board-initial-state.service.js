function getBoardBoxStateData() {
  return {
    markedBy: null,
    isUsed: false,
  };
}

function getInitialBoardState() {
  return new Array(3)
    .fill(null)
    .map((item) => new Array(3).fill(getBoardBoxStateData()));
}

export const initialBoardState = getInitialBoardState();
