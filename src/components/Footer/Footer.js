import React from "react";
import Logo from "../../logo.svg";
import L1 from "../../Images/l1.png";
import L2 from "../../Images/l2.png";

const Footer = () => {
  return (
    <section className="work-area" style={{height: "100px" }}>
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            {/* Intro */}
            <div className="intro mb-4">
              <div className="intro-content">
                <h3 >
                  <img src={Logo} className="mx-2" alt=""/>
                  LOGO
                </h3>
              </div>
            </div>
          </div>

          <div className="col-4">
            {/* Intro */}
            <div className="intro mb-4">
              <div className="intro-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            {/* Intro */}
            <div className="intro mb-4">
              <div className="intro-content row justify-content-center">
                <div>
                  <img src={L1} alt=""/>
                </div>
                <div>
                  <img src={L2} alt=""/>
                </div>
              </div>
            </div>
          </div>

          Copyright 2021 © Spuds
        </div>
      </div>
    </section>
  );
};

export default Footer;
