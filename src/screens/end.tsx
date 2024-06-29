import { FC, useEffect } from "react";
import SimpleButton from "../components/button/button";

const EndTest: FC<{ number: Array<number> | any }> = ({ number }) => {
  useEffect(() => {
    localStorage.setItem("testTime", "0");
  }, []);

  const calculatePercentageOfValues = (arr: [], value: number) => {
    let count = arr.filter((item: number) => item === value).length;
    let totalCount = arr.length;
    let percentage = (count / totalCount) * 100;
    return percentage;
  };

  function countOccurrences(arr: [], value: number) {
    let count = arr.reduce((acc: any, curr: any) => {
      return curr === value ? acc + 1 : acc;
    }, 0);
    return count;
  }

  return (
    <div className="flex flex-col w-full justify-center mt-[20%] gap-3">
      <p className="text-slate-800 font-bold mt-1 mb-1 text-center">тест окончен</p>
      <div className="text-slate-500 font-bold"> процентная часть правильных ответов: {calculatePercentageOfValues(number, 1)}%</div>
      <p className="text-slate-500 font-bold">количество неправильных ответов: {countOccurrences(number, 2)}</p>
      <button onClick={() => history.go()}>
        <SimpleButton name="в начало" />
      </button>
    </div>
  );
};

export default EndTest;
