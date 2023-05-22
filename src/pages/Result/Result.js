import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import styles from "./Result.module.scss";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { faBan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
const Result = () => {
  const { slug, numpart, titletest, id } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const idMini = searchParams.get("id");

  let titleTest;
  if (numpart && titletest) {
    titleTest =
      `PART ${numpart.charAt(numpart.length - 1)} - ` +
      titletest?.split("-")?.join(" ")?.toUpperCase();
  }
  const str = slug?.split("-")?.join(" ")?.toUpperCase();
  const title = str || titleTest || "ETS TOEIC 2022 Test 1";
  const [cookies, setCookie, removeCookie] = useCookies([
    "idFullTest",
    "idMiniTest",
  ]);

  const navigate = useNavigate();

  const handleClickDetail = () => {
    if (numpart && titletest) {
      navigate(`/minitest/${numpart}/${titletest}/result/detail/${idMini}`);
    } else {
      navigate(`/fulltest/${slug}/result/detail/${id}`);
    }
  };
  const [result, setResult] = useState();
  useEffect(() => {
    if (cookies) {
      const url =
        numpart && titletest
          ? `http://tinhoccaogiaphat.com/tests/skill-test/result/${cookies.idMiniTest}`
          : `http://tinhoccaogiaphat.com/tests/full-test/result/${cookies.idFullTest}`;
      axios
        .get(url, {
          headers: {
            accept: "*/*",
            "Content-Type": "*/*",
          },
        })
        .then((response) => {
          setResult(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [cookies, numpart, titletest]);

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
                <span>
                  {result?.totalCorrect} /{" "}
                  {result?.totalCorrect +
                    result?.totalIncorrect +
                    result?.totalSkipped}
                </span>
              </div>
              <div className={styles.statusPercent}>
                <span>Độ chính xác (#đúng/#tổng)</span>
                <span>{result?.percentageCorrect}%</span>
              </div>
              <div className={styles.statusTimer}>
                <span>Thời gian hoàn thành</span>
                <span>{result?.timeDoing}</span>
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.scoreBox2}>
                <div className={styles.correct}>
                  <div>
                    <FontAwesomeIcon icon={faFlag} />
                  </div>
                  <div>Điểm</div>
                  <div>{result?.totalScore}</div>
                </div>
              </div>
              <div className={styles.scoreBox}>
                <div className={styles.correct}>
                  <div>
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <div>Trả lời đúng</div>
                  <div>{result?.totalCorrect}</div>
                  <div>câu hỏi</div>
                </div>
                <div className={styles.incorrect}>
                  <div>
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  <div>Trả lời sai</div>
                  <div>{result?.totalIncorrect}</div>
                  <div>câu hỏi</div>
                </div>
                <div className={styles.skip}>
                  <div>
                    <FontAwesomeIcon icon={faBan} />
                  </div>
                  <div>Bỏ qua</div>
                  <div>{result?.totalSkipped}</div>
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
