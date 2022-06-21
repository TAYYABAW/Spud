import React, { Component } from "react";
import { StyleRoot } from "radium";

import Timeline from "./timeline/timeline";

import VID from "../../Images/c3.png";

import "../Hero/Hero.css";
class Collection extends Component {
  state = {};

  render() {
    return (
      <section className="hero-section bg1" >
        <div className="container">
          <div className="row mt-5  ">
            <div className="col-12 col-md-6 col-lg-6 ">
              <h4 className="mt-4 bg   " style={{ textAlign: "center" }}>
                Concert
              </h4>

              <div>
                <p className="col-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Bibendum est ultricies integer quis. Iaculis urna id volutpat
                  lacus laoreet. Mauris vitae ultricies leo integer malesuada.
                  Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu
                  cursus euismod. Dictum fusce ut
                </p>
              </div>
            </div>
            <img src={VID} alt="" style={{ width: "50%" }} />
          </div>

          <div className="row d-flex justify-content-center">
            <div id="map"
              className="col-12 col-md-6 col-lg-4 "
              style={{ textAlign: "center" }}
            >
              <h4 className="mt-4 bg ">Roadmap</h4>
            </div>
          </div>
          <div  >
            <StyleRoot >
              <Timeline   activeColor="radial-gradient(103.03% 103.03% at 0% 0%, #D080FF 0%, #6C5DD3 100%)">
                <div >
                  <h3>Stage 01</h3>
                  <ul >
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Bibendum est ultricies integer quis. Iaculis urna
                      id volutpat lacus laoreet. Mauris vitae ultricies leo
                      integer malesuada. Ac odio tempor orci dapibus ultrices
                      in. Egestas diam in arcu cursus euismod. Dictum fusce ut
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Stage 02</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Bibendum est ultricies integer quis. Iaculis urna
                      id volutpat lacus laoreet. Mauris vitae ultricies leo
                      integer malesuada. Ac odio tempor orci dapibus ultrices
                      in. Egestas diam in arcu cursus euismod. Dictum fusce ut
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Stage 03</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Bibendum est ultricies integer quis. Iaculis urna
                      id volutpat lacus laoreet. Mauris vitae ultricies leo
                      integer malesuada. Ac odio tempor orci dapibus ultrices
                      in. Egestas diam in arcu cursus euismod. Dictum fusce ut
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Stage 04</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Bibendum est ultricies integer quis. Iaculis urna
                      id volutpat lacus laoreet. Mauris vitae ultricies leo
                      integer malesuada. Ac odio tempor orci dapibus ultrices
                      in. Egestas diam in arcu cursus euismod. Dictum fusce ut
                    </li>
                  </ul>
                </div>
              </Timeline>
            </StyleRoot>
          </div>
        </div>
      </section>
    );
  }
}

export default Collection;
