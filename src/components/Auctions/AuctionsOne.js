import React, { Component } from "react";
import "./Auction.css";

const initData = {
  pre_heading: "Auctions",
  heading: "Live Auctions",
  btnText: "View All",
};

const data = [
  {
    id: "1",
    img: "./img/z3.png",
  },
  {
    id: "2",
    img: "./img/z1.png",
  },
  {
    id: "3",
    img: "./img/z2.png",
  },
  {
    id: "4",
    img: "./img/z3.png",
  },
  {
    id: "5",
    img: "./img/z1.png",
  },
  {
    id: "6",
    img: "./img/z2.png",
  },
];

class AuctionsOne extends Component {
  state = {
    initData: {},
    data: [],
  };
  componentDidMount() {
    this.setState({
      initData: initData,
      data: data,
    });
  }
  render() {
    return (
      <section className="live-auctions-area " id="showcase">
        <div className="container">
          <div
            className="row d-flex justify-content-center"
            style={{ textAlign: "center" }}
          >
            <div className="col-12 col-md-6 col-lg-4">
              {/* Intro */}
              <div className="intro  m-0">
                <h4 className="mt-4 bg align-text-center  ">Show Case</h4>
              </div>
            </div>
          </div>
          <div className="auctions-slides">
            <div className="swiper-container slider-mid items">
              <div className="swiper-wrapper">
                {/* Single Slide */}
                {this.state.data.map((item, idx) => {
                  return (
                      <div key={`auc_${idx}`} className="swiper-slide item">
                        <div className="image-over m-2">
                          <a href="/item-details">
                            <img
                              className="card-img-top"
                              src={item.img}
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="image-over m-2">
                          <a href="/item-details">
                            <img
                              className="card-img-top"
                              src={item.img}
                              alt=""
                            />
                          </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AuctionsOne;
