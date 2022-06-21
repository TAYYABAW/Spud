import React, { Component } from "react";
import "./Hero.css";
import Table from "../../Images/bg-table.png"
class Hero extends Component {
  state = {};

  render() {
    return (
      <section className="hero-section" > 
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div
              className="col-12 col-md-6 col-lg-4 "
              style={{ textAlign: "center" }}
            >
              <h4 className="mt-4 bg align-text-center  ">
                Spuds NFT Collection
              </h4>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              {/* Buttons */}
              <div className="button-group">
                <a
                  className="btn "
                  href="/explore-1"
                  style={{
                    background:
                      "radial-gradient(103.03% 103.03% at 0% 0%, #D080FF 0%, #6C5DD3 100%)",
                  }}
                >
                  Mint Now
                </a>
              </div>
      
            </div>
          </div>
        </div>
        <img src={Table} style={{ width: "100vw" }} alt="" />

      </section>
    );
  }
}

export default Hero;
