import HeaderInfo from "./components/header/HeaderInfo";
import HeaderNav from "./components/header/HeaderNav";
import FooterInfo from "./components/footer/FooterInfo";
import MainHeader from "./components/main/MainHeader";
import MainSteps from "./components/main/MainSteps";

import StepCheck from "./assets/step-check.png";
import StepCurrent from "./assets/step-current.png";
import StepAvailable from "./assets/step-available.png";

import "./App.css";
import MainProduct from "./components/main/MainProduct";

function App() {
  return (
    <div>
      <section className="header">
        <HeaderInfo
          icon={[
            "fluent:checkmark-starburst-20-regular",
            "ph:truck-light",
            "mdi:cards-heart-outline",
            "fluent:arrow-sync-checkmark-20-regular",
          ]}
          text={[
            "30-DAY SATISFACTION GUARANTEE",
            "FREE DELIVERY ON ORDERS OVER $40.00",
            "50.000+ HAPPY CUSTOMERS",
            "100% MONEY BACK GAURANTEE",
          ]}
        />
        <HeaderNav />
      </section>
      <section className="main">
        <MainHeader
          title="Wait! Your Order In Progress"
          subtitle="Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing"
        />
        <MainSteps
          img={[StepCheck, StepCheck, StepCurrent, StepAvailable]}
          text={[
            "Step 1 : Cart Review",
            "Step 2 : Checkout",
            "Step 3 : Special Offer",
            "Step 4 : Confirmation ",
          ]}
        />
        <MainProduct />
      </section>
      <section className="footer">
        <FooterInfo />
      </section>
    </div>
  );
}

export default App;
