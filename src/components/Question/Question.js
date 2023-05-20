import { faL } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import styles from "./Question.module.scss";
const Question = ({ ...props }) => {
  const answersEx = [
    {
      value: "A",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-A",
      checked: "A",
    },
    {
      value: "B",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-B",
      checked: "B",
    },
    {
      value: "C",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-C",
      checked: "C",
    },
    {
      value: "D",
      title: "A move to a new a city",
      name: "question-38131",
      id: "question-38131-D",
      checked: "D",
    },
  ];
  const {
    part,
    number = "32",
    text = "What is the woman preparing for?",
    isFourAns,
    listRes = [],
    answers = answersEx,
    onSet,
    isTimeup,
  } = props;
  // console.log(listRes, onSet);
  const res = useRef(null);
  const handleChangeRadio = (e) => {
    // console.log(e.target.value);
    // setRes(e.target.value);
    res.current = e.target.value;
    const result = e.target.value;
    const temp = [...listRes];

    let check = false;
    listRes.forEach((item, index) => {
      if (item.number === number) {
        temp[index].result = result;
        onSet([...temp]);
        check = true;
      }
    });
    if (check === false) {
      onSet([...listRes, { number, result }]);
    }
  };

  const handleChecked = (value) => {
    let temp;
    if (listRes && listRes.length > 0) {
      temp = listRes.find((item, index) => {
        return item.number === number;
      });
    }
    if (temp) {
      if (temp.result === value) {
        return true;
      }
    }
  };

  // console.log(answers);
  return (
    <div className={styles.wrapper}>
      <div className={styles.number}>
        <strong>{number}</strong>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>{text}</div>
        <div className={styles.answers}>
          {answers &&
            answers.map((answer, index) => {
              return (
                <div className={styles.answerItem} key={index}>
                  <input
                    type="radio"
                    id={answer?.id}
                    name={answer?.name}
                    value={answer?.value}
                    onChange={handleChangeRadio}
                    checked={handleChecked(answer?.value) || false}
                    disabled={isTimeup}
                  />
                  <label htmlFor={answer?.id}>
                    {answer?.value}.
                    <span>
                      {part === "Part 1" || part === "Part 2"
                        ? ""
                        : answer?.title || answer?.content}
                    </span>
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Question;
