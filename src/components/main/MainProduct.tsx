import "./MainProduct.css";
import ProductImage from "../../assets/clarifion-screenshot.png";
import ProductImageSmall from "../../assets/image-removebg-preview.png";
import ProductStars from "../../assets/Stars.png";
import BenefitCheck from "../../assets/tick-circle.png";
import IconPercentage from "../../assets/save-percentage.png";
import IconLine from "../../assets/line.png";
import IconLock from "../../assets/lock.png";
import IconVisa from "../../assets/visa.png";
import IconShopPay from "../../assets/shop-pay.png";
import IconPaypal from "../../assets/paypal.png";
import IconMastercard from "../../assets/mastercard.png";
import IconGooglePay from "../../assets/gpay.png";
import IconApplePay from "../../assets/apple-pay.png";
import IconAmex from "../../assets/amex.png";
import Testimonial from "./Testimonial";
import IconGuarantee from "../../assets/guarantee.png";
import IconStock from "../../assets/stock.png";

const MainProduct = () => {
  return (
    <div className="main-product">
      <div className="main-product-left">
        <div className="main-product-image">
          <img
            src={ProductImage}
            alt="Product Clarifion"
            className="img-size"
            width={450}
          />
        </div>
        <Testimonial />
      </div>

      <div className="main-product-details">
        <p className="product-title">
          <span className="title-blue">ONE TIME ONLY</span> Special Price For 6
          Extra Clarifion For Only <span className="title-blue">$14 Each</span>{" "}
          ($84.00 Total)
        </p>
        <div className="product-price">
          <div className="product-price-minimalist">
            <img src={ProductImageSmall} alt="Product Clarifion" />
          </div>
          <div className="product-price-rigth">
            <div className="product-price-information">
              <div className="product-price-information-header-title">
                <span>Clarifion Air Ionize</span>
              </div>
              <div className="product-price-information-header-price">
                <span className="before-price">$180</span>
                <span className="current-price">$84</span>
              </div>
            </div>
            <img src={ProductStars} alt="Product Stars" width={80} />
            <div className="product-stock">
              <img src={IconStock} alt="Product Stock" />
              <span className="stock">12 left in Stock</span>
            </div>
            <p className="stock-text">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
        <div className="product-benefits">
          <ul>
            <li>
              <img src={BenefitCheck} alt="Product Benefit" />
              <p>
                Negative Ion Technology my{" "}
                <span className="benefit-resalt">help with allergens</span>
              </p>
            </li>
            <li>
              <img src={BenefitCheck} alt="Product Benefit" />
              <p>
                Designed for{" "}
                <span className="benefit-resalt">air rejuvenation</span>
              </p>
            </li>
            <li>
              <img src={BenefitCheck} alt="Product Benefit" />
              <p>
                <span className="benefit-resalt">Perfect for every room </span>
                in all types of places.
              </p>
            </li>
          </ul>
        </div>
        <div className="product-saves">
          <img
            src={IconPercentage}
            alt="Product Saves Percentages"
            width={24}
          />
          <p>
            Save <span className="saves-resalt">53%</span> and get{" "}
            <span className="saves-resalt">6 extra Clarifision</span> for only{" "}
            <span className="saves-resalt">$14 Each</span>
          </p>
        </div>
        <div className="product-payments">
          <div className="product-payments-agree">
            <span>YES - CLAIM MY DISSCOUNT</span>
            <img
              src={IconLine}
              alt="Product Payments Line"
              width={16}
              height={10}
            />
          </div>
          <div className="product-payments-pay">
            <span>Free Shipping</span>
            <div className="security">
              <img src={IconLock} alt="Product Payments Line" />
              <span>Secure 256-Bit SSL Encryption</span>
            </div>
            <div className="method-paymets">
              <img src={IconVisa} alt="Product Payments Line" />
              <img src={IconShopPay} alt="Product Payments Line" />
              <img src={IconPaypal} alt="Product Payments Line" />
              <img src={IconMastercard} alt="Product Payments Line" />
              <img src={IconGooglePay} alt="Product Payments Line" />
              <img src={IconApplePay} alt="Product Payments Line" />
              <img src={IconAmex} alt="Product Payments Line" />
            </div>
          </div>
          <p className="method-payments-no">NO THANKS, I DON'T WANT THIS</p>
        </div>
        <div className="product-garantee">
          <img
            src={IconGuarantee}
            alt="Product Guarantee"
            width={80}
            height={80}
          />
          <p>
            If you are not completely thrilled with your Clarifion - We have a{" "}
            <span className="guarantee-resalt">
              30 day satisfaction guarantee.
            </span>{" "}
            Please refer to our return policy at the bottom of the page for more
            details.
            <br />
            Happy Shopping!.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
