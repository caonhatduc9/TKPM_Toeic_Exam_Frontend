import Container from "react-bootstrap/Container";
import "react-tabs/style/react-tabs.css";
import styles from "./ResultDetailMiniTest.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Audio,
  CountDownTimer,
  ListPart,
  QuestionGroup,
} from "../../components";
import { useCookies } from "react-cookie";
import axios from "axios";

const ResultDetailMiniTest = () => {
  const [listResult, setListResult] = useState([]);
  const [isTimeup, setIsTimeup] = useState(true);
  const [listPart, setListPart] = useState([]);
  const [resultDetail, setResultDetail] = useState([]);
  const timer = useRef(0);
  const { numpart, titletest, id } = useParams();
  const titleTest =
    `PART ${numpart.charAt(numpart.length - 1)} - ` +
    titletest?.split("-")?.join(" ")?.toUpperCase();
  const navigate = useNavigate();

  const handleClickExit = () => {
    navigate(`/minitest/${numpart}/${titletest}/result/${id}`);
  };
  const numPart = +numpart.charAt(numpart.length - 1);

  const handleIsListening = (data) => {
    data.forEach((item) => {
      item.isListening = true;
    });
  };

  const handleDataQuestionGroup = (data) => {
    if (data) {
      // console.log(data);
      if (data[0]?.name === "Part 1" || data[0]?.name === "Part 2") {
        handleIsListening(data[0]?.partQuestions[0]?.questions);
      }
      if (
        data[0]?.name === "Part 1" ||
        data[0]?.name === "Part 2" ||
        data[0]?.name === "Part 5"
      ) {
        return data[0]?.partQuestions[0]?.questions;
      } else {
        const tempQuestionGroup = data[0]?.partParagraphs[0]?.paragraphs;
        const listQues = [];
        tempQuestionGroup &&
          tempQuestionGroup.forEach((item) => {
            let temp = [];
            temp = [...temp, ...item.questions];
            temp[0].contentQuestion = item.content;
            temp[0].assets = item.assets;
            if (data[0]?.name === "Part 3" || data[0]?.name === "Part 4") {
              temp[0].isListening = true;
            }
            listQues.push(...temp);
          });
        return listQues;
      }
    }
  };
  const [cookies, setCookie, removeCookie] = useCookies(["idMiniTest"]);
  useEffect(() => {
    axios
      .get(
        `http://tinhoccaogiaphat.com/tests/skill-test/part${numPart}/${id}`,
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const res = response?.data?.data[0];
        setListPart(res?.parts);
      })
      .catch((err) => {
        console.log(err);
      });
    if (cookies) {
      axios
        .get(
          `http://tinhoccaogiaphat.com/tests/skill-test/result/${cookies.idMiniTest}/detail`,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          // console.log(response.data.data);
          const userRes = response.data.data?.studentAnswer;
          const resDetail = response.data.data?.answer;
          setListResult(userRes);
          setResultDetail(resDetail);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>{titleTest}</h2>
        <Button variant="outline-primary" onClick={handleClickExit}>
          Quay về trang kết quả
        </Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          <QuestionGroup
            part={"Part " + numPart}
            iuFullTest={false}
            data={handleDataQuestionGroup(listPart)}
            isTwoCols={numpart === "6" || numpart === "7" ? true : false}
            listResult={listResult}
            onSetListResult={setListResult}
            isListening={listPart?.parts?.[0]?.isListening}
            isTimeup={isTimeup}
            isShowResult={true}
            resultDetail={resultDetail}
          />
        </div>
        <div className={styles.naviWrapper}>
          <div className={styles.naviInner}>
            <div className={styles.navMain}>
              {/* <div>Thời gian còn lại:</div>
              <CountDownTimer onComplete={handleTimeup} timer={timer.current} />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button> */}

              <ListPart
                data={handleDataQuestionGroup(listPart)}
                title={"Part " + numpart}
                listRes={listResult}
                isShowResult={true}
                userResult={listResult}
                resultDetail={resultDetail}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ResultDetailMiniTest;
