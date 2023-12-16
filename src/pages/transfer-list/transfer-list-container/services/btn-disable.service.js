function isAllLeftDisabled({ rightList }) {
  return rightList.length == 0;
}

function isAllRightDisabled({ leftList }) {
  return leftList.length == 0;
}

function isCheckedLeftDisabled({ rightList }) {
  let tempArr = rightList.filter((item) => item.checked);
  return tempArr.length == 0;
}

function isCheckedRightDisabled({ leftList }) {
  let tempArr = leftList.filter((item) => item.checked);
  return tempArr.length == 0;
}

const btnDisableService = {
  isAllLeftDisabled,
  isAllRightDisabled,
  isCheckedLeftDisabled,
  isCheckedRightDisabled,
};

export default btnDisableService;
