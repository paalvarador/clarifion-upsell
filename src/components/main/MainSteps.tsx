import "./MainSteps.css";

interface Props {
  img: string[];
  text: string[];
}

const MainSteps = ({ img, text }: Props) => {
  return (
    <div className="main-steps">
      <ul>
        {img.map((imagen, index) => (
          <li key={index}>
            <img src={imagen} alt={`Imagen ${index}`} className="iconSize" />
            <span
              className={
                text[index] === "Step 3 : Special Offer" ? "boldText" : ""
              }
            >
              {text[index]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainSteps;
