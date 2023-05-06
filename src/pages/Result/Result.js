import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import styles from "./Result.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faBan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
const Result = () => {
  return (
    <Container fluid="lg">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Kết quả luyện tập: ETS TOEIC 2022 Test 1</h2>
          <div>
            <Button variant="primary" href="/xemdapan">
              Xem đáp án
            </Button>
            {/* <Link to="/datcauhoi" /> */}
          </div>
          <div className={styles.scoreDetail}>
            <div className={styles.statusBox}>
              <div className={styles.statusRes}>
                <span>Kết quả làm bài</span>
                <span>0/6</span>
              </div>
              <div className={styles.statusPercent}>
                <span>Độ chính xác (#đúng/#tổng)</span>
                <span>0%</span>
              </div>
              <div className={styles.statusTimer}>
                <span>Thời gian hoàn thành</span>
                <span>0:48:35</span>
              </div>
            </div>
            <div className={styles.scoreBox}>
              <div className={styles.correct}>
                <div>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>Trả lời đúng</div>
                <div>0</div>
                <div>câu hỏi</div>
              </div>
              <div className={styles.incorrect}>
                <div>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div>Trả lời sai</div>
                <div>0</div>
                <div>câu hỏi</div>
              </div>
              <div className={styles.skip}>
                <div>
                  <FontAwesomeIcon icon={faBan} />
                </div>
                <div>Bỏ qua</div>
                <div>0</div>
                <div>câu hỏi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Result;
