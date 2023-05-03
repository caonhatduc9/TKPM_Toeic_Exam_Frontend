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
const DoFullTest = () => {
  const answersEx = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-A",
    },
    {
      value: "B",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-B",
    },
    {
      value: "C",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-C",
    },
    {
      value: "D",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-D",
    },
  ];
  const dataTemplatePart67 = [
    {
      id: 131133,
      ques: "To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 131,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
        {
          number: 132,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
        {
          number: 133,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
      ],
    },
    {
      id: 134136,
      ques: "To continue providing the highest level of ----- (131) to our corporate tenants, we have scheduled the south lobby restrooms for maintenance this weekend, May 13 and May 14. ----- (132)this time, the restrooms will be out of order, so tenants andtheir guests should instead use the facilities in the northlobby. We ----- (133) for any inconvenience this might cause.-----(134). Denville Property Management Partners",
      answers: [
        {
          number: 134,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
        {
          number: 135,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
        {
          number: 136,
          text: "What is the woman preparing for?",
          answers: answersEx,
          isDone: false,
        },
      ],
    },
  ];
  const parts = [
    {
      title: "Part 1",
      id: "partcontent1",
      questions: dataTemplatePart67,
      isTwoCols: false,
    },
    {
      title: "Part 2",
      id: "partcontent2",
      questions: dataTemplatePart67,
      isTwoCols: false,
    },
    {
      title: "Part 3",
      id: "partcontent3",
      questions: dataTemplatePart67,
      isTwoCols: false,
    },
    {
      title: "Part 4",
      id: "partcontent4",
      questions: dataTemplatePart67,
      isTwoCols: false,
    },
    {
      title: "Part 5",
      id: "partcontent5",
      questions: dataTemplatePart67,
      isTwoCols: false,
    },
    {
      title: "Part 6",
      id: "partcontent6",
      questions: dataTemplatePart67,
      isTwoCols: true,
    },
    {
      title: "Part 7",
      id: "partcontent7",
      questions: dataTemplatePart67,
      isTwoCols: true,
    },
  ];
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
            <Tabs>
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
              <CountDownTimer />
              {parts &&
                parts.map((item, index) => {
                  return (
                    <ListPart
                      data={item?.questions}
                      key={index}
                      title={item?.title}
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
