import { FC } from "react";
import { FiPhoneCall } from "react-icons/fi";

type Props = {
  call: boolean;
  text: string;
  style?: string;
  mainStyle?: any;
};
const Button: FC<Props> = ({ call, text, style, mainStyle }) => {
  return (
    <button
      style={mainStyle}
      className={`py-3 md:w-full w-4/5 bg-[#37C932] rounded-sm flex ${
        call ? "pl-4" : ""
      } items-center md:text-2xl text-sm font-extrabold text-white ${style}`}
    >
      {call && (
        <div className="">
          <FiPhoneCall size={25} color="white" />
        </div>
      )}
      <span className="self-center w-full"> {text}</span>
    </button>
  );
};

export default Button;
