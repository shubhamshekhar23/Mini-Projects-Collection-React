import React, { useState, useEffect, useRef } from "react";

import styles from "./otp-input-container.module.scss";

export default function OtpInputContainer({ numDigits = 4 }) {
  const [valueList, setValueList] = useState([null]);

  const inputRefArr = new Array(numDigits).fill(null).map(() => useRef());

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") handleKeyLeft();
    if (event.key === "ArrowRight") handleKeyRight();
    if (event.key === "Backspace") handleBackSpace(event);
  };

  const handleBackSpace = (event) => {
    const activeIndex = getActiveIndex();
    console.warn(activeIndex);

    if (!valueList[activeIndex]) {
      event.preventDefault();
      if (activeIndex == 0) {
        inputRefArr[numDigits - 1].current.select();
        inputRefArr[numDigits - 1].current.focus();
        return;
      }
      inputRefArr[activeIndex - 1].current.select();
      inputRefArr[activeIndex - 1].current.focus();
    } else {
      const newArray = [...valueList];
      newArray[activeIndex] = "";
      setValueList(newArray);
    }
  };

  const handleKeyLeft = () => {
    if (getActiveIndex() == 0) {
      inputRefArr[numDigits - 1].current.focus();
      return;
    }
    inputRefArr[getActiveIndex() - 1].current.focus();
  };

  const handleKeyRight = () => {
    if (getActiveIndex() === numDigits - 1) {
      inputRefArr[0].current.focus();
      return;
    }
    inputRefArr[getActiveIndex() + 1].current.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [valueList]);

  useEffect(() => {
    console.log(valueList);
  }, [valueList]);

  useEffect(() => {
    setValueList(new Array(numDigits).fill(""));
    inputRefArr[0].current.focus();
  }, [numDigits]);

  const getActiveIndex = () => {
    for (let index = 0; index < inputRefArr.length; index++) {
      const element = inputRefArr[index];
      if (element.current === document.activeElement) {
        return index;
      }
    }
    return -1;
  };

  const handleChange = (e, index) => {
    const newArray = [...valueList];
    newArray[index] = e.target.value;
    setValueList(newArray);

    if (!e.target.value) return;

    if (index === numDigits - 1) {
      inputRefArr[0].current.focus();
      return;
    }
    inputRefArr[index + 1].current.focus();
  };

  const inputElements = new Array(numDigits).fill(null).map((item, index) => {
    return (
      <input
        key={index}
        ref={inputRefArr[index]}
        type="number"
        onChange={(e) => handleChange(e, index)}
      />
    );
  });

  return (
    <main className={styles.otp_input_container_container}>
      {inputElements}
    </main>
  );
}
