import React from "react";
import "./Projects.scss";
import animated_gif from "../../resources/animated_efeed_website.gif";

import efeed_website from "../../resources/efeed.website.gif";

export const Projects = () => {
  return (
    <>
      <div className="container-fluid bg-light">
        <div class="inner_container">
          <div className="card_container">
            <div className="card bg-light">
              <div className="img_container">
                <img className="card_img" src={animated_gif} alt="" />
              </div>
              <p className="card_para">
                Built complete website using GSAP plugin when we scroll
              </p>
            </div>
            <div className="card bg-light">
              <div className="img_container">
                <img className="card_img" src={efeed_website} alt="" />
              </div>
              <p className="card_para">
                Created a website using React, bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
