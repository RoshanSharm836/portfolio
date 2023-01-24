import "./App.css";
import Heading from "./Heading";
import Social from "./Social";
function Contact() {
  return (
    <div className="portfolio-contact" id="contact">
      <Heading title="contact" />
      <div className="contact-flex">
        <div className="contact-info">
          <div className="what">
            <i className="icon">
              <img alt="" src="./phone-call.png" />
            </i>
            <span className="contact-headingtitle">contact info</span>
            <hr className="hr1" />
            <hr className="hr2" />
          </div>
          <div className="what">
            <i className="icon">
              <img alt="" src="./gmail.png" />
            </i>
            <span className="contact-title">roshan836sharma@gmail.com</span>
          </div>
          <div className="what">
            <i className="icon">
              <img alt="" src="./phone-call.png" />
            </i>
            <span className="contact-title">7482984341</span>
          </div>
          <div className="what">
            <i className="icon">
              <img alt="" src="./address.png" />
            </i>
            <span className="contact-title">Patna,Bihar</span>
          </div>

          <Social />
        </div>
        {/* <form className="contact-form" action="">
          <span> contact us</span>
          <input type="text" placeholder="name"></input>
          <input type="mail" placeholder="gmail"></input>
          <input type="number" placeholder="number"></input>
          <textarea placeholder="Message..." rows="5"></textarea>
          <button className="btm">submit</button>
        </form> */}
      </div>
    </div>
  );
}
export default Contact;
