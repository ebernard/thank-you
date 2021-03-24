import { useState, useEffect } from "react";
import {
  defaultContext,
  getCurrentCounter,
  getCurrentPercentage,
} from "./Context";

const ProgressBar = () => {
  const currentCounter = getCurrentCounter(defaultContext);
  const [counter, setCounter] = useState(currentCounter);
  const currentPercentage = getCurrentPercentage(defaultContext);
  const [percentage, setPercentage] = useState(currentPercentage);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(getCurrentCounter(defaultContext));
      setPercentage(getCurrentPercentage(defaultContext));
    }, defaultContext.interval);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>Seconds since operation start: {counter}</p>
      <p>Completion: {percentage.toFixed(2)} %</p>
    </>
  );
};

export default ProgressBar;
