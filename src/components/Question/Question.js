import styles from "./Question.module.scss";
const Question = ({ ...props }) => {
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
  const {
    number = "32",
    text = "What is the woman preparing for?",
    isFourAns,
    answers = answersEx,
  } = props;
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
                  />
                  <label htmlFor={answer?.id}>
                    {answer?.value}. {answer?.title}
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
