import { FC } from "react";

interface iSimpleButton {
  name: string;
  func?: () => void;
}

const SimpleButton: FC<iSimpleButton> = ({ name = "SimpleButton", func = () => {} }) => {
  return (
    <button
      className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 hover:bg-gradient-to-l hover:from-blue-400 hover:via-blue-500 hover:to-blue-500 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow-2xl"
      onClick={func}
    >
      {name}
    </button>
  );
};

export default SimpleButton;
