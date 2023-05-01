import { Button } from "react-bootstrap";
import styles from "./Card.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <a href="#" className={styles.itemLink}>
        <h2>This is a title</h2>
        <div className={styles.testWrapper}>
          <div>
            <span>Bộ đề thi: IELTS C17 Full Test 1</span>
          </div>
          <div>
            <span>120 phut</span>
          </div>
          <div>
            <span>200 cau hoi</span>
          </div>
          <Button>Chi tiet</Button>
        </div>
      </a>
    </div>
  );
};
export default Card;
