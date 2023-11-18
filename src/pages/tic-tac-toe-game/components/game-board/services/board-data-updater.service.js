export function checkAndUpdateCross(dummyBoard, position) {
  const { rowIndex, colIndex } = position;

  checkAnUpdateForVerticalLine(dummyBoard, colIndex);
  checkAnUpdateForHorizontalLine(dummyBoard, rowIndex);
  checkForLeftAndRightCross(dummyBoard);
}

function checkForLeftAndRightCross(dummyBoard) {}

function checkAnUpdateForVerticalLine(dummyBoard, colIndex) {
  let markedBy = dummyBoard[0][colIndex].markedBy;

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[index][colIndex];
    if (item.markedBy !== markedBy) return;
  }

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[index][colIndex];
    item.isUsed = true;
  }
}

function checkAnUpdateForHorizontalLine(dummyBoard, rowIndex) {
  let markedBy = dummyBoard[rowIndex][0].markedBy;

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[rowIndex][index];
    if (item.markedBy !== markedBy) return;
  }

  for (let index = 0; index < 3; index++) {
    const item = dummyBoard[rowIndex][index];
    item.isUsed = true;
  }
}
