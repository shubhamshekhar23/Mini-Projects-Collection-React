function allLeft({ leftList, rightList, setLeftList, setRightList }) {
  setLeftList([...leftList, ...rightList]);
  setRightList([]);
}

function allRight({ leftList, rightList, setLeftList, setRightList }) {
  setRightList([...rightList, ...leftList]);
  setLeftList([]);
}

function checkedLeft({ leftList, rightList, setLeftList, setRightList }) {
  let checkedItemsInRIght = rightList.filter((item) => item.checked);
  let nonCheckedItemsInRIght = rightList.filter((item) => !item.checked);
  setLeftList([...leftList, ...checkedItemsInRIght]);
  setRightList(nonCheckedItemsInRIght);
}

function checkedRight({ leftList, rightList, setLeftList, setRightList }) {
  let checkedItemsInLeft = leftList.filter((item) => item.checked);
  let nonCheckedItemsInLeft = leftList.filter((item) => !item.checked);
  setRightList([...rightList, ...checkedItemsInLeft]);
  setLeftList(nonCheckedItemsInLeft);
}

const btnActionService = {
  allLeft,
  allRight,
  checkedLeft,
  checkedRight,
};

export default btnActionService;
