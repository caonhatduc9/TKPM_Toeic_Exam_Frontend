import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import styles from "./Result.module.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faBan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
const Result = () => {
  const { slug, numpart, titletest } = useParams();
  let titleTest;
  if (numpart && titletest) {
    titleTest =
      `PART ${numpart.charAt(numpart.length - 1)} - ` +
      titletest?.split("-")?.join(" ")?.toUpperCase();
  }
  const str = slug?.split("-")?.join(" ")?.toUpperCase();
  const title = str || titleTest || "ETS TOEIC 2022 Test 1";
  const result = {
    mark: 720,
    res: "2 / 200",
    accuracy: 30,
    timer: "0:48:20",
    correct: 120,
    incorrect: 80,
    skip: 0,
  };
  const params = useParams();
  const navigate = useNavigate();

  const handleClickDetail = () => {
    if (numpart && titletest) {
      navigate(`/minitest/${numpart}/${titletest}/result/detail`);
    } else {
      navigate(`/fulltest/${slug}/result/detail`);
    }
  };

  return (
    <Container fluid="lg">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Kết quả luyện tập: {title} </h2>
          <div>
            <Button variant="primary" onClick={handleClickDetail}>
              Xem đáp án
            </Button>
            {/* <Link to="/datcauhoi" /> */}
          </div>
          <div className={styles.scoreDetail}>
            <div className={styles.statusBox}>
              <div className={styles.statusRes}>
                <span>Kết quả làm bài</span>
                <span>{result?.res}</span>
              </div>
              <div className={styles.statusPercent}>
                <span>Độ chính xác (#đúng/#tổng)</span>
                <span>{result?.accuracy}%</span>
              </div>
              <div className={styles.statusTimer}>
                <span>Thời gian hoàn thành</span>
                <span>{result?.timer}</span>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.scoreBox2}>
                <div className={styles.correct}>
                  <div>
                    <FontAwesomeIcon icon={faFlag} />
                  </div>
                  <div>Điểm</div>
                  <div>{result?.mark}</div>
                </div>
              </div>
              <div className={styles.scoreBox}>
                <div className={styles.correct}>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div>Trả lời đúng</div>
                  <div>{result?.correct}</div>
                  <div>câu hỏi</div>
                </div>
                <div className={styles.incorrect}>
                  <div>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  <div>Trả lời sai</div>
                  <div>{result?.incorrect}</div>
                  <div>câu hỏi</div>
                </div>
                <div className={styles.skip}>
                  <div>
                    <FontAwesomeIcon icon={faBan} />
                  </div>
                  <div>Bỏ qua</div>
                  <div>{result?.skip}</div>
                  <div>câu hỏi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Result;
