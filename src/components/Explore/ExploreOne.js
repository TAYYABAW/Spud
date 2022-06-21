import React, { Component } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../Hero/Hero.css";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 220,
  strokeWidth: 20,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;
const ExploreOne = () => {
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <section className="hero-section bg1">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div
            className="col-12 col-md-6 col-lg-4 "
            style={{ textAlign: "center" }}
          >
            <h4 className="mt-4 bg align-text-center  ">Countdown</h4>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5  ">
          <div className="mx-2">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#3a5dff", "#6C5DD3"]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime, color }) => (
                <h4 style={{ color: "white" }}>
                  {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
                </h4>
              )}
            </CountdownCircleTimer>
          </div>
          <div className="mx-2">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#3a5dff", "#6C5DD3"]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <h4 style={{ color: "white" }}>
                  {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                </h4>
              )}
            </CountdownCircleTimer>
          </div>

          <div className="mx-2">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#3a5dff", "#6C5DD3"]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
              })}
            >
              {({ elapsedTime, color }) => (
                <h4 style={{ color: "white" }}>
                  {renderTime(
                    "minutes",
                    getTimeMinutes(hourSeconds - elapsedTime)
                  )}
                </h4>
              )}
            </CountdownCircleTimer>
          </div>
          <div className="mx-2">
            <CountdownCircleTimer
              {...timerProps}
              colors={["#3a5dff", "#6C5DD3"]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => ({
                shouldRepeat: remainingTime - totalElapsedTime > 0,
              })}
            >
              {({ elapsedTime, color }) => (
                <h4 style={{ color: "white" }}>
                  {renderTime("seconds", getTimeSeconds(elapsedTime))}
                </h4>
              )}
            </CountdownCircleTimer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreOne;
