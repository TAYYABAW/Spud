import React, { Component } from "react";
import B1 from "../../Images/b1.png";
import B2 from "../../Images/b2.png";
import IMG from "../../Images/s1.png";
import VID from "../../Images/v1.png";
import "./Top.css";

import "../Hero/Hero.css";
class TopSeller extends Component {
  state = {};

  render() {
    return (
      <section className="hero-section bg1" id="comic">
        <div className="container">
          <div className="row  ">
            <div className="col-12 col-md-6 col-lg-6 ">
              <h4 className="mt-4 bg   " style={{ textAlign: "center" }}>
                Zombie
              </h4>
              <div className="d-flex ">
                <div className="mt-4 mx-2">
                  <img src={B1} style={{ width: "300px" }} alt="" />
                </div>
                <div>
                  <h4>Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>

              <div className="d-flex ">
                <div className="mt-4 mx-2">
                  <img src={B2} style={{ width: "300px" }} alt="" />
                </div>
                <div>
                  <h4>Title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
            <img src={IMG} alt="" style={{ width: "50%" }} />
          </div>

          <div className="row mt-5  ">
            <img src={VID} alt="" style={{ width: "50%" }} />

            <div className="col-12 col-md-6 col-lg-6 ">
              <h4 className="mt-4 bg   " style={{ textAlign: "center" }}>
                Comic book
              </h4>

              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum est ultricies integer quis. Iaculis urna id volutpat
                  lacus laoreet. Mauris vitae ultricies leo integer malesuada.
                  Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu
                  cursus euismod. Dictum fusce ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TopSeller;
