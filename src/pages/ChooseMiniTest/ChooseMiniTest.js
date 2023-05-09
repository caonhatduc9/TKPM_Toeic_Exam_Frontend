import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import slugify from "react-slugify";
import { Col, Container, Row } from "react-bootstrap";
import images from "../../assets/images";
import styles from "./ChooseMiniTest.module.scss";

const ChooseMiniTest = () => {
  const listMiniTestPart1 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart2 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart3 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart4 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart5 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart6 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const listMiniTestPart7 = [
    {
      title: "Part 1 - Mini Test 1",
      id: 1,
    },
    {
      title: "Part 1 - Mini Test 2",
      id: 2,
    },
    {
      title: "Part 1 - Mini Test 3",
      id: 3,
    },
    {
      title: "Part 1 - Mini Test 4",
      id: 4,
    },
    {
      title: "Part 1 - Mini Test 5",
      id: 5,
    },
    {
      title: "Part 1 - Mini Test 6",
      id: 6,
    },
    {
      title: "Part 1 - Mini Test 7",
      id: 7,
    },
    {
      title: "Part 1 - Mini Test 8",
      id: 8,
    },
  ];
  const { numpart } = useParams();
  const numPart = +numpart.charAt(numpart.length - 1);
  let listMiniTestPartN;
  if (numPart === 1) {
    listMiniTestPartN = listMiniTestPart1;
  } else if (numPart === 2) {
    listMiniTestPartN = listMiniTestPart2;
  } else if (numPart === 3) {
    listMiniTestPartN = listMiniTestPart3;
  } else if (numPart === 4) {
    listMiniTestPartN = listMiniTestPart4;
  } else if (numPart === 5) {
    listMiniTestPartN = listMiniTestPart5;
  } else if (numPart === 6) {
    listMiniTestPartN = listMiniTestPart6;
  } else if (numPart === 7) {
    listMiniTestPartN = listMiniTestPart7;
  }
  const navigate = useNavigate();
  const handleClickChooseMiniTest = (title) => {
    const slugChooseMiniTest = slugify(title.slice(title.search("M")));
    navigate(`/minitest/part${numPart}/${slugChooseMiniTest}/start`);
  };
  return (
    <Container>
      <div className={styles.wrapper}>
        <h2>Mini Test - Part {numPart}</h2>
        <div className={styles.content}>
          <ul className={styles.list}>
            {listMiniTestPartN &&
              listMiniTestPartN.length > 0 &&
              listMiniTestPartN.map((item) => {
                return (
                  <li
                    key={item.id}
                    onClick={() => handleClickChooseMiniTest(item.title)}
                  >
                    {item.title}
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
