import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "react-slugify";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../assets/images";
import styles from "./ChooseMiniTest.module.scss";
import axios from "axios";

const ChooseMiniTest = () => {
  const { numpart } = useParams();
  const numPart = +numpart.charAt(numpart.length - 1);
  const navigate = useNavigate();
  const handleClickChooseMiniTest = (title, id) => {
    const slugChooseMiniTest = slugify(title);
    navigate(`/minitest/part${numPart}/${slugChooseMiniTest}/start?id=${id}`);
  };

  const [miniTest, setMiniTest] = useState([]);
  const [idTest, setIdTest] = useState();
  useEffect(() => {
    axios
      .get(`http://tinhoccaogiaphat.com/tests/skill-test/${numpart}`)
      .then((response) => {
        console.log(response.data);
        setMiniTest(response.data.data);
        setIdTest(response.data.id);
      });
  }, []);
  console.log(miniTest);

  return (
    <Container>
      <div className={styles.wrapper}>
        <h2>Mini Test - Part {numPart}</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            {miniTest &&
              miniTest.length > 0 &&
              miniTest.map((item) => {
                return (
                  <li
                    key={item?.id}
                    onClick={() =>
                      handleClickChooseMiniTest(item?.name, item?.id)
                    }
                  >
                    {item?.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default ChooseMiniTest;
