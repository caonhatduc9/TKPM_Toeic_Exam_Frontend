import Container from "react-bootstrap/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./ResultDetail.module.scss";
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
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
const ResultDetail = () => {
  const { slug, id } = useParams();
  console.log(useParams());

  const [listParts, setListParts] = useState([]);
  const [resultDetail, setResultDetail] = useState([]);
  const [listResult, setListResult] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isTimeup, setIsTimeup] = useState(true);
  const timer = useRef(0);
  const [cookies, setCookie, removeCookie] = useCookies(["idFullTest"]);
  const navigate = useNavigate();
  useEffect(() => {
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
    if (cookies) {
      axios
        .get(
          `http://tinhoccaogiaphat.com/tests/full-test/result/${cookies.idFullTest}/detail`,
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data.data);
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

  const handleSelectTab = (index) => {
    setTabIndex(index);
  };

  const title = slug?.split("-")?.join(" ")?.toUpperCase();

  const handleClickExit = () => {
    navigate(`/fulltest/${slug}/result/${id}`);
  };

  const handleDataQuestionGroup = (data) => {
    if (data) {
      if (
        data?.name === "Part 1" ||
        data?.name === "Part 2" ||
        data?.name === "Part 3" ||
        data?.name === "Part 4"
      ) {
        data.isListening = true;
      } else data.isListening = false;
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
          Quay về trang kết quả
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
                      <Tab key={item.id} className={styles.itemLink}>
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
                    <TabPanel key={item.id}>
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
                          isListening={item?.isListening}
                          indexTab={tabIndex}
                          onSelectTab={handleSelectTab}
                          isTimeup={isTimeup}
                          isShowResult={true}
                          resultDetail={resultDetail}
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
              {listParts &&
                listParts.map((item, index) => {
                  return (
                    <ListPart
                      data={handleDataQuestionGroup(item)}
                      key={index}
                      title={item?.name}
                      listRes={listResult}
                      isShowResult={true}
                      userResult={listResult}
                      resultDetail={resultDetail}
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
export default ResultDetail;
