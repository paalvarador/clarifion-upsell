import "./MainHeader.css";

interface Props {
  title: string;
  subtitle: string;
}

const MainHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="main-title">
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </div>
  );
};

export default MainHeader;
