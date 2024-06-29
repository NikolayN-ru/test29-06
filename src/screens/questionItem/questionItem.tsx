import React, { FC, useEffect, useState } from "react";
import VariableButton from "../../components/variableButton/variableButton";

const QuestionItem: FC<any> = ({ item, total, setChoiseAnswer }) => {
  const [active, setActive] = useState([999]);

  useEffect(()=>{
    setActive([999])
  },[total])

  const toggleInc = (id: number) => {
    setActive((prevActive) => {
      if (prevActive.includes(id)) {
        return prevActive.filter((item) => item !== id);
      } else {
        return [...prevActive, id];
      }
    });
  };

  return (
    <div>
      <div className="text-slate-500 font-bold mt-6 mb-3 text-left">{item.question}</div>
      <div className="flex flex-col justify-start gap-1">
        {item.options.map((item: any, id: number) => (
          <VariableButton {...{ id }} key={id} name={item} active={active} {...{ toggleInc }} {...{setChoiseAnswer}}/>
        ))}
      </div>
    </div>
  );
};

export default QuestionItem;
