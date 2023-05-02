import Container from "react-bootstrap/Container";
import styles from "./DoFullTest.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import { Button, Nav } from "react-bootstrap";
import { Audio, Question, QuestionGroup } from "../../components";
const DoFullTest = () => {
  const parts = [
    {
      title: "Part 1",
      id: "partcontent1",
    },
    {
      title: "Part 2",
      id: "partcontent2",
    },
    {
      title: "Part 3",
      id: "partcontent3",
    },
    {
      title: "Part 4",
      id: "partcontent4",
    },
    {
      title: "Part 5",
      id: "partcontent5",
    },
    {
      title: "Part 6",
      id: "partcontent6",
    },
    {
      title: "Part 7",
      id: "partcontent7",
    },
  ];
  return (
    <Container fluid>
      <div className={styles.heading}>
        <h2>ETS TOEIC 2022 Test 1</h2>
        <Button variant="outline-primary">Thoát</Button>
      </div>
      <div className={styles.testWrapper}>
        <div className={styles.nav}>
          <Nav
            variant="pills"
            defaultActiveKey={"#" + parts[0]?.id}
            role="tablist"
          >
            {parts &&
              parts.length > 0 &&
              parts.map((item, index) => {
                return (
                  <Nav.Item key={index} className={styles.itemLink}>
                    {/* href is redirect part content */}
                    <Nav.Link
                      href={"#" + item?.id}
                      className={styles.navItemLink}
                    >
                      {item?.title}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
        </div>
        <div className={styles.content}>
          <Audio />
          <Question />
          <QuestionGroup />
        </div>
      </div>
    </Container>
  );
};
export default DoFullTest;
