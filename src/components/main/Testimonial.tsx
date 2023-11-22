import ProfileCustomer from "../../assets/customer-profile.png";
import ProfileStars from "../../assets/profile-stars.png";
import ProfileVerified from "../../assets/profile-verified.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-customer">
        <div className="testimonial-customer-header">
          <img src={ProfileCustomer} alt="Customer Profile" />
          <div className="testimonial-customer-information">
            <img src={ProfileStars} alt="Customer Profile Stars" width={70} />
            <div className="profile-verified">
              <span className="name">Ken T.</span>
              <img src={ProfileVerified} alt="Customer Profile verified" />
              <span className="verified">Verified Customer</span>
            </div>
          </div>
        </div>
        <div className="testimonial-customer-tought">
          <p>
            "As soon as the Clarifions arrived I put one in my bedroom. This was
            late in the afternoon. When I went to the bedroom in the evening it
            smelled clean. When I went to bed I felt I could breathe better.
            Wonderful!."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
