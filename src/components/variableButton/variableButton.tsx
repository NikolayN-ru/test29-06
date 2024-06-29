import { FC } from "react";

interface iVariableButton {
  name: string;
  active: number[];
  id: number;
  toggleInc: (id: number) => void;
  setChoiseAnswer: (name: String) => void;
}

const VariableButton: FC<iVariableButton> = ({ name, active, id, toggleInc, setChoiseAnswer }) => {
  return (
    <button onClick={() => (toggleInc(id), setChoiseAnswer(name))} className={`w-[400px] h-[40px] hover:bg-blue-100 bg-white ${active.includes(id) && "bg-orange-300"}`}>
      {name}
    </button>
  );
};

export default VariableButton;
