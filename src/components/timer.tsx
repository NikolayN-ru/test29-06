import { useState, useEffect } from "react";

const Timer = () => {
  const initialTimeInSeconds = 300;
  const [currentTime, setCurrentTime] = useState(loadTestTime() || initialTimeInSeconds);

  function saveTestTime(timeInSeconds: string) {
    localStorage.setItem("testTime", timeInSeconds);
  }

  function loadTestTime() {
    let savedTime = localStorage.getItem("testTime");
    if (savedTime !== null) {
      return parseInt(savedTime);
    }
    return null;
  }

  function formatTime(seconds: number) {
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const updatedTime: number = prevTime - 1;
        saveTestTime(updatedTime.toString());
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function displayTime() {
    if (currentTime < 0) {
      return "Время истекло";
    }
    return formatTime(currentTime);
  }

  return (
    <div className="w-[80px] h-[30px] border-double border-4 border-grey-900 rounded mt-[10px]">
      <div className="text-slate-500 font-bold">{displayTime()}</div>
    </div>
  );
};

export default Timer;
