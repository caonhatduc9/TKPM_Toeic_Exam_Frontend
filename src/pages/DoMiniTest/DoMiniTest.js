import Container from "react-bootstrap/Container";
import "react-tabs/style/react-tabs.css";
import styles from "./DoMiniTest.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
  Audio,
  CountDownTimer,
  ListPart,
  QuestionGroup,
} from "../../components";
import axios from "axios";
import { useCookies } from "react-cookie";

const DoMiniTest = () => {
  const [listResult, setListResult] = useState([]);
  const [isTimeup, setIsTimeup] = useState(false);
  const [idPart, setIdPart] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const timer = useRef(0);
  const timeStart = useRef();
  const timeEnd = useRef();
  const { numpart, titletest } = useParams();
  const titleTest =
    `PART ${numpart.charAt(numpart.length - 1)} - ` +
    titletest?.split("-")?.join(" ")?.toUpperCase();
  const navigate = useNavigate();
  const [listPart, setListPart] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["idFullTest"]);
  useEffect(() => {
    timeStart.current = new Date().toUTCString();
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
        console.log(response?.data?.data[0]);
        if (
          res?.parts[0]?.name === "Part 1" ||
          res?.parts[0]?.name === "Part 2" ||
          res?.parts[0]?.name === "Part 3" ||
          res?.parts[0]?.name === "Part 4"
        ) {
          res.parts[0].isListening = true;
          res.parts[0].isTwoCols = false;
        } else {
          res.parts[0].isListening = false;
          res.parts[0].isTwoCols = true;
        }
        setListPart(res?.parts);
        setIdPart(res?.parts[0]?.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickSubmit = async () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?") === true) {
      timeEnd.current = new Date().toUTCString();
      const dataSubmit = {
        type: "SKILL_TEST",
        idTest: idPart,
        userResult: [...listResult],
        timeStart: timeStart.current,
        timeEnd: timeEnd.current,
      };

      await axios
        .post(
          `http://tinhoccaogiaphat.com/tests/result/1?id=${id}`,
          dataSubmit
          // {
          //   headers: {
          //     accept: "*/*",
          //     "Content-Type": "*/*",
          //   },
          // }
        )
        .then((res) => {
          console.log("res", res.data);
          if (res.data.statusCode !== 500) {
            navigate(
              `/minitest/${numpart}/${titletest}/result/${idPart}?id=${id}`
            );
            if (cookies.idFullTest) {
              removeCookie("idMiniTest");
            }
            setCookie("idMiniTest", res.data.testId);
          }
        })
        .catch((err) => {
          console.log("error in request", err);
        });
    }
  };
  const handleTimeup = useCallback(() => {
    setIsTimeup(true);
  }, []);
  const handleClickExit = () => {
    if (
      window.confirm(
        "Bạn có thực sự muốn thoát, kết quả làm bài của bạn sẽ không được lưu?"
      ) === true
    ) {
      navigate("/fulltest");
    }
  };
  const numPart = +numpart.charAt(numpart.length - 1);

  const handleIsListening = (data) => {
    data.forEach((item) => {
      item.isListening = true;
    });
  };

  const handleDataQuestionGroup = (data) => {
    if (data) {
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
            if (data[0]?.name === "Part 3" || data[0]?.name === "Part 4") {
              temp[0].isListening = true;
            }
            listQues.push(...temp);
          });
        return listQues;
      }
    }
  };
  const handleMinDoMiniTest = (namepart) => {
    if (namepart === "part1") {
      return 300000;
    } else if (namepart === "part2") {
      return 420000;
    } else if (namepart === "part3") {
      return 1200000;
    } else if (namepart === "part 4") {
      return 900000;
    } else if (namepart === "part 5") {
      return 900000;
    } else if (namepart === "part 6") {
      return 900000;
    } else if (namepart === "part 7") {
      return 3300000;
    }
  };

  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>
          PART {numpart.charAt(numpart.length - 1)} - {listPart?.name}
        </h2>
        <Button variant="outline-primary" onClick={handleClickExit}>
          Thoát
        </Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          <QuestionGroup
            part={"Part " + numPart}
            iuFullTest={false}
            isListening={listPart?.parts?.[0]?.isListening}
            // data={listQues}
            data={handleDataQuestionGroup(listPart)}
            isTwoCols={numPart === 6 || numPart === 7 ? true : false}
            listResult={listResult}
            onSetListResult={setListResult}
            isTimeup={isTimeup}
          />
        </div>
        <div className={styles.naviWrapper}>
          <div className={styles.naviInner}>
            <div className={styles.navMain}>
              <div>Thời gian còn lại:</div>
              <CountDownTimer
                onComplete={handleTimeup}
                timer={timer.current}
                milliseconds={handleMinDoMiniTest(numpart)}
              />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button>
              <ListPart
                data={handleDataQuestionGroup(listPart)}
                title={"Part " + numPart}
                listRes={listResult}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DoMiniTest;
