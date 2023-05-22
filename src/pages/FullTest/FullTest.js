import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
const FullTest = () => {
  const [fullTest, setFullTest] = useState([]);

  useEffect(() => {
    axios
      .get("http://tinhoccaogiaphat.com/tests/full-test", {
        headers: {
          accept: "*/*",
          "Content-Type": "*/*",
        },
      })
      .then((response) => {
        setFullTest(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
    <Container fluid="md" style={{ marginTop: "10rem" }}>
      <Row>
        {fullTest &&
          fullTest.length > 0 &&
          fullTest.map((item, index) => {
            return (
              <Col md={3} key={index}>
                <Card
                  title={item?.name}
                  des={item?.description}
                  id={item?.id}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default FullTest;
