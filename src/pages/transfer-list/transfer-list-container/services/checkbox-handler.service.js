function handleLeftCheckbox(e, id, { leftList, setLeftList }) {
  const temp = _getUpdatedArr(leftList, e, id);
  setLeftList(temp);
}

function handleRightCheckbox(e, id, { rightList, setRightList }) {
  const temp = _getUpdatedArr(rightList, e, id);
  setRightList(temp);
}

function _getUpdatedArr(arr, e, id) {
  const checked = e.target.checked;
  const temp = [...arr];
  return temp.map((item) => {
    if (item.id == id) {
      item.checked = checked;
    }
    return item;
  });
}

const checkboxHandlerService = {
  handleLeftCheckbox,
  handleRightCheckbox,
};

export default checkboxHandlerService;
