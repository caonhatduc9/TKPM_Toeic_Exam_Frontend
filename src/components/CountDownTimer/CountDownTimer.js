import { memo, useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import styles from "./CountDownTimer.module.scss";
const TimeUp = () => {
  return <div className={styles.timeup}>00:00</div>;
};
const CountDownTimer = ({ ...props }) => {
  // // clearInterval(timer.current);
  // useEffect(() => {
  //   // clearInterval(timer.current);
  //   setInterval(() => {
  //     console.log("check");
  //     timer.current += 1;
  //   }, 1000);
  // }, []);
  const { milliseconds = 20000, onComplete } = props;
  let { timer } = props;
  // console.log(onComplete);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed === true) {
      // console.log(timer.current);
      // clearInterval(timer.current);
      // console.log(Date.now());
      console.log(timer + 1);
      return <TimeUp />;
    }
    if (hours >= 1) {
      return (
        <span className={styles.countdown}>
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    } else {
      return (
        <span className={styles.countdown}>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <Countdown
        date={Date.now() + milliseconds}
        daysInHours={true}
        onComplete={onComplete}
        autoStart
        renderer={renderer}
        onTick={() => {
          timer += 1;
        }}
      />
    </div>
  );
};
export default memo(CountDownTimer);
