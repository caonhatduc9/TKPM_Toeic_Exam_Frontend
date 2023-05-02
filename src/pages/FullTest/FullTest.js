import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
const FullTest = () => {
  const listFullTest = [
    {
      title: "ETS TOEIC 2022 Test 1",
      des: "ETS TOEIC 2022 Test 1",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 2",
      des: "ETS TOEIC 2022 Test 2",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 3",
      des: "ETS TOEIC 2022 Test 3",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 4",
      des: "ETS TOEIC 2022 Test 4",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 5",
      des: "ETS TOEIC 2022 Test 5",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 6",
      des: "ETS TOEIC 2022 Test 6",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 7",
      des: "ETS TOEIC 2022 Test 7",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
    {
      title: "ETS TOEIC 2022 Test 8",
      des: "ETS TOEIC 2022 Test 8",
      time: 120,
      countUser: 9999,
      numQues: 120,
    },
  ];
  return (
    <Container fluid="md">
      <Row>
        {listFullTest &&
          listFullTest.map((item, index) => {
            return (
              <Col md={3} key={index}>
                <Card
                  title={item.title}
                  des={item.des}
                  time={item.time}
                  countUser={item.countUser}
                  numQues={item.numQues}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default FullTest;
