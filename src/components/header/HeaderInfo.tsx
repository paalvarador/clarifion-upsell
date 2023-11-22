import { Icon } from "@iconify/react";
import "./HeaderInfo.css";

interface Props {
  icon: string[];
  text: string[];
}

const HeaderInfo = ({ icon, text }: Props) => {
  return (
    <div id="header-information">
      <ul>
        {icon.map((icono, index) => (
          <li key={index}>
            <Icon icon={icono} className="icon-size" />
            <span>{text[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderInfo;
