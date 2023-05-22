import Container from "react-bootstrap/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./DoFullTest.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import { Button, Nav } from "react-bootstrap";
import {
  Audio,
  CountDownTimer,
  ListPart,
  Question,
  QuestionGroup,
} from "../../components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const DoFullTest = () => {
  const [listParts, setListParts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [listResult, setListResult] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isTimeup, setIsTimeup] = useState(false);
  const timeStart = useRef();
  const timeEnd = useRef();
  const timer = useRef(0);
  const [cookies, setCookie, removeCookie] = useCookies(["idFullTest"]);
  useEffect(() => {
    timeStart.current = new Date().toUTCString();
    axios
      .get(`http://tinhoccaogiaphat.com/tests/full-test/${id}`, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log(response.data);
        setListParts(response?.data?.data?.parts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  const handleSelectTab = (index) => {
    setTabIndex(index);
  };
  const { slug } = useParams();
  const title = slug?.split("-")?.join(" ")?.toUpperCase();
  const handleClickSubmit = async () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?") === true) {
      // console.log("Done");
      timeEnd.current = new Date().toUTCString();
      const dataSubmit = {
        type: "FULL_TEST",
        idTest: id,
        userResult: [...listResult],
        timeStart: timeStart.current,
        timeEnd: timeEnd.current,
      };
      await axios
        .post(
          `http://tinhoccaogiaphat.com/tests/result/${id}`,
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
            navigate(`/fulltest/${slug}/result/${id}`);
            if (cookies.idFullTest) {
              removeCookie("idFullTest");
            }
            setCookie("idFullTest", res.data.testId);
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

  const handleDataQuestionGroup = (data) => {
    if (data) {
      if (
        data.name === "Part 1" ||
        data.name === "Part 2" ||
        data.name === "Part 5"
      ) {
        return data?.partQuestions[0]?.questions;
      } else {
        const tempQuestionGroup = data?.partParagraphs[0]?.paragraphs;
        const listQues = [];
        tempQuestionGroup &&
          tempQuestionGroup.forEach((item) => {
            let temp = [];
            temp = [...temp, ...item.questions];
            temp[0].contentQuestion = item.content;
            listQues.push(...temp);
          });
        return listQues;
      }
    }
  };
  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>{title}</h2>
        <Button variant="outline-primary" onClick={handleClickExit}>
          Thoát
        </Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          <Audio />
          <div className={styles.nav}>
            <Tabs selectedIndex={tabIndex} onSelect={(i) => handleSelectTab(i)}>
              <TabList>
                {listParts &&
                  listParts.length > 0 &&
                  listParts.map((item, index) => {
                    // console.log(item?.parts?.name);
                    return (
                      <Tab key={index} className={styles.itemLink}>
                        {item?.name}
                      </Tab>
                    );
                  })}
              </TabList>
              {listParts &&
                listParts.length > 0 &&
                listParts.map((item, index) => {
                  // console.log(2222, item);
                  return (
                    <TabPanel key={index}>
                      <div className={styles.content}>
                        <QuestionGroup
                          part={item?.name}
                          data={handleDataQuestionGroup(item)}
                          isTwoCols={
                            item?.name === "Part 6" || item?.name === "Part 7"
                              ? true
                              : false
                          }
                          listResult={listResult}
                          onSetListResult={setListResult}
                          isFullTest={true}
                          // isFullTest={false}
                          indexTab={tabIndex}
                          onSelectTab={handleSelectTab}
                          isTimeup={isTimeup}
                        />
                      </div>
                    </TabPanel>
                  );
                })}
            </Tabs>
          </div>
        </div>
        <div className={styles.naviWrapper}>
          <div className={styles.naviInner}>
            <div className={styles.navMain}>
              <div>Thời gian còn lại:</div>
              <CountDownTimer
                onComplete={handleTimeup}
                timer={timer.current}
                milliseconds={7200000}
              />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button>
              {listParts &&
                listParts.map((item, index) => {
                  return (
                    <ListPart
                      data={handleDataQuestionGroup(item)}
                      key={index}
                      title={item?.name}
                      listRes={listResult}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default DoFullTest;
