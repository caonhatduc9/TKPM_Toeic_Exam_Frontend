import Countdown from "react-countdown";
import styles from "./CountDownTimer.module.scss";
const TimeUp = () => {
  return <div className={styles.timeup}>00:00</div>;
};
const CountDownTimer = ({ ...props }) => {
  const { milliseconds = 100000 } = props;
  return (
    <div className={styles.wrapper}>
      <Countdown
        date={Date.now() + milliseconds}
        daysInHours={true}
        className={styles.countdown}
      >
        <TimeUp />
      </Countdown>
    </div>
  );
};
export default CountDownTimer;
