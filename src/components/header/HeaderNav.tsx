import clarifion_logo from "../../assets/Clarifion_Logo.png";
import mcafee_logo from "../../assets/McAfee_Secure.png";
import norton_logo from "../../assets/norton-antivirus-logo.png";
import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={clarifion_logo} alt="Clarifion Logo" />
      </div>
      <div className="navbar_antivirus">
        <img src={mcafee_logo} alt="McAfee Antivirus" />
        <img src={norton_logo} alt="Norton Antivirus" />
      </div>
    </div>
  );
};

export default HeaderNav;
