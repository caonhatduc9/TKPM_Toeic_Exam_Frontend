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
import { useNavigate } from "react-router-dom";
const DoFullTest = () => {
  const answersExPart1 = [
    {
      value: "A",
      title: "",
      name: "question-1",
      id: "question-1-A",
    },
    {
      value: "B",
      title: "",
      name: "question-1",
      id: "question-1-B",
    },
    {
      value: "C",
      title: "",
      name: "question-1",
      id: "question-1-C",
    },
    {
      value: "D",
      title: "",
      name: "question-1",
      id: "question-1-D",
    },
  ];
  const answersExPart1b = [
    {
      value: "A",
      title: "",
      name: "question-2",
      id: "question-2-A",
    },
    {
      value: "B",
      title: "",
      name: "question-2",
      id: "question-2-B",
    },
    {
      value: "C",
      title: "",
      name: "question-2",
      id: "question-2-C",
    },
    {
      value: "D",
      title: "",
      name: "question-2",
      id: "question-2-D",
    },
  ];
  const answersExPart2 = [
    {
      value: "A",
      title: "",
      name: "question-7",
      id: "question-7-A",
    },
    {
      value: "B",
      title: "",
      name: "question-7",
      id: "question-7-B",
    },
    {
      value: "C",
      title: "",
      name: "question-7",
      id: "question-7-C",
    },
  ];
  const answersExPart2b = [
    {
      value: "A",
      title: "",
      name: "question-8",
      id: "question-8-A",
    },
    {
      value: "B",
      title: "",
      name: "question-8",
      id: "question-8-B",
    },
    {
      value: "C",
      title: "",
      name: "question-8",
      id: "question-8-C",
    },
  ];
  const answersExPart3 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-32",
      id: "question-32-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-32",
      id: "question-32-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-32",
      id: "question-32-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-32",
      id: "question-32-D",
    },
  ];
  const answersExPart3b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-33",
      id: "question-33-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-33",
      id: "question-33-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-33",
      id: "question-33-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-33",
      id: "question-33-D",
    },
  ];
  const answersExPart4 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-71",
      id: "question-71-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-71",
      id: "question-71-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-71",
      id: "question-71-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-71",
      id: "question-71-D",
    },
  ];
  const answersExPart4b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-72",
      id: "question-72-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-72",
      id: "question-72-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-72",
      id: "question-72-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-72",
      id: "question-72-D",
    },
  ];
  const answersExPart5 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-101",
      id: "question-101-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-101",
      id: "question-101-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-101",
      id: "question-101-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-101",
      id: "question-101-D",
    },
  ];
  const answersExPart5b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-102",
      id: "question-102-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-102",
      id: "question-102-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-102",
      id: "question-102-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-102",
      id: "question-102-D",
    },
  ];
  const answersExPart6 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-131",
      id: "question-131-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-131",
      id: "question-131-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-131",
      id: "question-131-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-131",
      id: "question-131-D",
    },
  ];
  const answersExPart6b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-132",
      id: "question-132-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-132",
      id: "question-132-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-132",
      id: "question-132-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-132",
      id: "question-132-D",
    },
  ];
  const answersExPart7 = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-147",
      id: "question-147-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-147",
      id: "question-147-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-147",
      id: "question-147-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-147",
      id: "question-147-D",
    },
  ];
  const answersExPart7b = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-148",
      id: "question-148-A",
    },
    {
      value: "B",
      title: "A business trip",
      name: "question-148",
      id: "question-148-B",
    },
    {
      value: "C",
      title: "A building tour",
      name: "question-148",
      id: "question-148-C",
    },
    {
      value: "D",
      title: "A meeting with visiting colleagues",
      name: "question-148",
      id: "question-148-D",
    },
  ];
  const dataTemplatePart1 = [
    {
      id: 1,
      ques: "",
      imageURL:
        "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_1.png",
      answers: [
        {
          number: 1,
          text: "",
          answers: answersExPart1,
          isDone: false,
        },
      ],
    },
    {
      id: 2,
      ques: "",
      imageURL:
        "https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_2.png",
      answers: [
        {
          number: 2,
          text: "",
          answers: answersExPart1b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart2 = [
    {
      id: 7,
      ques: "",
      answers: [
        {
          number: 7,
          text: "",
          answers: answersExPart2,
          isDone: false,
        },
      ],
    },
    {
      id: 8,
      ques: "",
      answers: [
        {
          number: 8,
          text: "",
          answers: answersExPart2b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart3 = [
    {
      id: 32,
      ques: "",
      answers: [
        {
          number: 32,
          text: "Who most likely is the man?",
          answers: answersExPart3,
          isDone: false,
        },
      ],
    },
    {
      id: 33,
      ques: "",
      answers: [
        {
          number: 33,
          text: "Who most likely is the man?",
          answers: answersExPart3b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart4 = [
    {
      id: 71,
      ques: "",
      answers: [
        {
          number: 71,
          text: "What is the speaker interested in learning more about?",
          answers: answersExPart4,
          isDone: false,
        },
      ],
    },
    {
      id: 72,
      ques: "",
      answers: [
        {
          number: 72,
          text: "What is the speaker interested in learning more about?",
          answers: answersExPart4b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart5 = [
    {
      id: 101,
      ques: "",
      answers: [
        {
          number: 101,
          text: "Mougey Fine Gifts is known for its large range of _____ goods.",
          answers: answersExPart5,
          isDone: false,
        },
      ],
    },
    {
      id: 102,
      ques: "",
      answers: [
        {
          number: 102,
          text: "Mougey Fine Gifts is known for its large range of _____ goods.",
          answers: answersExPart5b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart6 = [
    {
      id: 131,
      ques: "To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 131,
          text: "",
          answers: answersExPart6,
          isDone: false,
        },
      ],
    },
    {
      id: 132,
      ques: "To continue providing the highest level of ----- (132) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 132,
          text: "",
          answers: answersExPart6b,
          isDone: false,
        },
      ],
    },
  ];
  const dataTemplatePart7 = [
    {
      id: 147,
      ques: "http://www.moonglowairways.com.au Special Announcement by Geoff Clifford, President of Moon Glow Airways As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is it that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.",
      answers: [
        {
          number: 147,
          text: "What is the purpose of the announcement?",
          answers: answersExPart7,
          isDone: false,
        },
      ],
    },
    {
      id: 148,
      ques: "http://www.moonglowairways.com.au Special Announcement by Geoff Clifford, President of Moon Glow Airways As many of you are aware, there was a problem with Pelman Technology, the system that handles our airline reservations. This outage has affected several airlines. It's been a rough week, but the good news is it that it has been repaired, and we are re-setting our system. However, Moon Glow passengers may still face delays for day or two. This most likely will include longer lines at airports. We have added more on-site customer service representatives at airports in all of our destination cities to assist customers with their flights and information. We appreciate your understanding and patience.",
      answers: [
        {
          number: 148,
          text: "What is the purpose of the announcement?",
          answers: answersExPart7b,
          isDone: false,
        },
      ],
    },
  ];
  const parts = [
    {
      title: "Part 1",
      id: "partcontent1",
      questions: dataTemplatePart1,
      isTwoCols: false,
    },
    {
      title: "Part 2",
      id: "partcontent2",
      questions: dataTemplatePart2,
      isTwoCols: false,
    },
    {
      title: "Part 3",
      id: "partcontent3",
      questions: dataTemplatePart3,
      isTwoCols: false,
    },
    {
      title: "Part 4",
      id: "partcontent4",
      questions: dataTemplatePart4,
      isTwoCols: false,
    },
    {
      title: "Part 5",
      id: "partcontent5",
      questions: dataTemplatePart5,
      isTwoCols: false,
    },
    {
      title: "Part 6",
      id: "partcontent6",
      questions: dataTemplatePart6,
      isTwoCols: true,
    },
    {
      title: "Part 7",
      id: "partcontent7",
      questions: dataTemplatePart7,
      isTwoCols: true,
    },
  ];
  const [listResult, setListResult] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [isTimeup, setIsTimeup] = useState(false);
  const timer = useRef(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(111, listResult);
  }, [listResult]);
  const handleSelectTab = (index) => {
    setTabIndex(index);
  };
  const handleClickSubmit = () => {
    if (window.confirm("Bạn có chắc chắn muốn nộp bài?") === true) {
      console.log("Done");
      navigate(`/fulltest/ets-toeic-2022-test-1/result`);
    }
  };
  const handleTimeup = useCallback(() => {
    setIsTimeup(true);
  }, []);
  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>ETS TOEIC 2022 Test 1</h2>
        <Button variant="outline-primary">Thoát</Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.testContent}>
          <Audio />
          <div className={styles.nav}>
            <Tabs selectedIndex={tabIndex} onSelect={(i) => handleSelectTab(i)}>
              <TabList>
                {parts &&
                  parts.length > 0 &&
                  parts.map((item, index) => {
                    return (
                      <Tab key={item.id} className={styles.itemLink}>
                        {item?.title}
                      </Tab>
                    );
                  })}
              </TabList>
              {parts &&
                parts.length > 0 &&
                parts.map((item, index) => {
                  return (
                    <TabPanel key={item.id}>
                      <div className={styles.content}>
                        <QuestionGroup
                          data={item?.questions}
                          isTwoCols={item?.isTwoCols}
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
              <CountDownTimer onComplete={handleTimeup} timer={timer.current} />
              <Button
                variant="outline-primary"
                size="lg"
                onClick={handleClickSubmit}
              >
                {" "}
                NỘP BÀI
              </Button>
              {parts &&
                parts.map((item, index) => {
                  return (
                    <ListPart
                      data={item?.questions}
                      key={index}
                      title={item?.title}
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
