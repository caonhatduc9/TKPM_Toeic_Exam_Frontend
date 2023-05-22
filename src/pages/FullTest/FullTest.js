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

  return (
    <Container fluid="md" style={{ marginTop: "20px" }}>
      <h2 className="title-list-test">List FullTest</h2>
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
