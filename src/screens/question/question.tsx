import { FC, useState } from "react";
import { data } from "../../data/qestion";
import SimpleButton from "../../components/button/button";
import QuestionItem from "../questionItem/questionItem";
import EndTest from "../end";
import Timer from "../../components/timer";

const Question = () => {
  const [number, setNumber] = useState(Array(data.questions.length).fill(0));
  const [total, setTotal] = useState(0);
  const [answer, setAnswer] = useState<String[]>([]);

  const shangeNumber = (id: number, value: number) => {
    const candidate = [...number];
    candidate[id] = value;
    setNumber(candidate);
  };

  const setChoiseAnswer = (item: string) => {
    const candidate = [...answer, item];
    setAnswer(candidate);
  };

  const examination = () => {
    if (answer[0] == data.questions[total].correctAnswer) {
      shangeNumber(total, 1);
    } else {
      shangeNumber(total, 2);
    }

    setTotal((prev) => prev + 1);

    setAnswer([]);
  };

  if (total == data.questions.length) {
    return <EndTest {...{ number }} />;
  }

  return (
    <div>
      <div className="flex w-full justify-center bg-slate-100 pb-9 mt-[10%]">
        <div className="flex flex-col">
          <Timer />
          <h2 className="text-slate-500 font-bold mb-2">
            {" "}
            вопрос {total} из {15}
          </h2>
          <div></div>
          <div className="flex w-full gap-[5px]">
            {data.questions.map((_: any, id: number) => (
              <Mark key={id} item={number[id]} {...{ setNumber }} />
            ))}
          </div>
          <div>
            <QuestionItem item={data.questions[total]} {...{ total }} {...{ setChoiseAnswer }} />
          </div>
          <br />
          <br />
          <SimpleButton name="далее" func={examination} />
        </div>
      </div>
    </div>
  );
};

export default Question;

const Mark: FC<{ item: string }> = ({ item = "4" }) => {
  return <div className={`w-[70px] h-[10px]  ${+item == 1 ? "bg-lime-600" : "bg-white"} ${+item == 2 && "bg-red-500"}`}></div>;
};
