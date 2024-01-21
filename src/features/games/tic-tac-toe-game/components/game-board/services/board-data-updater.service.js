export function checkAndUpdateCross(dummyBoard, position) {
  const { rowIndex, colIndex } = position;

  let isWin1 = checkAnUpdateForVerticalLine(dummyBoard, colIndex);
  let isWin2 = checkAnUpdateForHorizontalLine(dummyBoard, rowIndex);
  let isWin3 = checkForLeftAndRightCross(dummyBoard);

  return isWin1 || isWin2 || isWin3;
}

function checkForLeftAndRightCross(dummyBoard) {
  /* to be implemented */
}

function checkAnUpdateForVerticalLine(dummyBoard, colIndex) {
  let markedBy = dummyBoard[0][colIndex].markedBy;

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[index][colIndex];
    if (item.markedBy !== markedBy) return false;
  }

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[index][colIndex];
    item.isUsed = true;
  }
  return true;
}

function checkAnUpdateForHorizontalLine(dummyBoard, rowIndex) {
  let markedBy = dummyBoard[rowIndex][0].markedBy;

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[rowIndex][index];
    if (item.markedBy !== markedBy) return false;
  }

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[rowIndex][index];
    item.isUsed = true;
  }
  return true;
}
