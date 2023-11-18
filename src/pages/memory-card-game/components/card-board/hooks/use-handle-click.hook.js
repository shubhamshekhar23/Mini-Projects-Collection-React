import React, { useRef, useState } from "react";

function getLookup() {
  return new Array(16).fill(false);
}

export function useHandleClickHook(emojiList) {
  const [lookup, setLookup] = useState(getLookup());
  const [isClickAllowed, setIsClickAllowed] = useState(true);
  const [selectedFirstIndex, setSelectedFirstIndex] = useState(-1);

  function handleCardClick(index) {
    if (!isClickAllowed) return;
    if (lookup[index]) return;

    let arrList = [...lookup];
    arrList[index] = true;
    setLookup(arrList);

    // firs time selected
    if (selectedFirstIndex == -1) {
      setSelectedFirstIndex(index);
      return;
    }

    // second time selected
    if (emojiList[selectedFirstIndex] != emojiList[index]) {
      setIsClickAllowed(false);
      setTimeout(() => {
        let arrList = [...lookup];
        arrList[index] = false;
        arrList[selectedFirstIndex] = false;
        setLookup(arrList);
        setIsClickAllowed(true);
      }, 1000);
    }
    resetSelectedFirstIndex();
  }

  function resetSelectedFirstIndex() {
    setSelectedFirstIndex(-1);
  }

  return {
    lookup,
    handleCardClick,
  };
}
