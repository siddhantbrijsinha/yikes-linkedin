import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import ProfileImage from "../../assets/images/avatar2.png";

const FeedPage = () => {
  return (
    <div className="home">
      <div />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <div className="imageAndPost">
            <img src={ProfileImage} alt="" className="avatar" />
            <div className="post">
              <input type="text" placeholder="Start a post" />
            </div>
          </div>
          <div className="iconsBelowPost">
            <div className="item">
              <i className="bi bi-image-fill pictureIcon"></i>
              <p>Photo</p>
            </div>
            <div className="item">
              <i className="bi bi-youtube videoIcon"></i>
              <p>Video</p>
            </div>
            <div className="item">
              <i className="bi bi-calendar-event-fill eventIcon"></i>
              <p>Event</p>
            </div>
            <div className="item">
              <i className="bi bi-newspaper articleIcon"></i>
              <p>Write Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
