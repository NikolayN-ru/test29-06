import { FC } from "react";
import SimpleButton from "../components/button/button";

const Welcome: FC<{ toggleState: () => void }> = ({ toggleState }) => {
  return (
    <div className="flex flex-col w-full mt-[20%] gap-2">
      <h1 className="text-2xl font-bold text-center text-slate-500 mt-8">Добро пожаловать на тест.</h1>
      <div>
        <SimpleButton name="начать" func={toggleState} />
      </div>
    </div>
  );
};

export default Welcome;
