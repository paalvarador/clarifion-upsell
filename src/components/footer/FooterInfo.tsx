import Lock from "../../assets/lock.png";
import "./FooterInfo.css";

const FooterInfo = () => {
  return (
    <div className="footer-info">
      <div className="footer-copyright">
        <ul>
          <li>Copyright (c) 2023</li>
          <li>clarifionsupport@clarifion.com</li>
        </ul>
      </div>
      <div className="footer-security">
        <img src={Lock} alt="Footer Secutity" />
        <span>Secure 256-Bit SSL Encryption</span>
      </div>
    </div>
  );
};

export default FooterInfo;
