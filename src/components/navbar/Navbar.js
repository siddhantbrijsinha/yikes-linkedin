import "./navbar.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProfileImage from "../../assets/images/avatar2.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="items">
          <div className="item">
            <i className="bi bi-search icon"></i>
          </div>
          <div className="item">
            <i className="bi bi-house-door-fill icon"></i>
          </div>
          <div className="item">
            <i className="bi bi-people-fill icon"></i>
          </div>
          <div className="item">
            <i className="bi bi-briefcase-fill icon"></i>
          </div>
          <div className="item">
            <i className="bi bi-chat-left-text-fill icon"></i>
            <div className="counter">21</div>
          </div>
          <div className="item">
            <i className="bi bi-bell-fill icon"></i>
            <div className="counter">53</div>
          </div>
          <div className="item">
            <img src={ProfileImage} alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
