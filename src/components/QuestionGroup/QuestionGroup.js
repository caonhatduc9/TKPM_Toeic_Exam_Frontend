import styles from "./QuestionGroup.module.scss";
import Question from "../Question/Question";
const QuestionGroup = ({ ...props }) => {
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
        },
        {
          number: 132,
          text: "What is the woman preparing for?",
          answers: answersEx,
        },
        {
          number: 133,
          text: "What is the woman preparing for?",
          answers: answersEx,
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
        },
        {
          number: 135,
          text: "What is the woman preparing for?",
          answers: answersEx,
        },
        {
          number: 136,
          text: "What is the woman preparing for?",
          answers: answersEx,
        },
      ],
    },
  ];
  const { isImage, isTwoCols, data = dataTemplatePart67 } = props;
  return (
    <div className={styles.wrapper}>
      {isTwoCols ? (
        <>
          {data &&
            data.map((item) => {
              return (
                <div className={styles.inner} key={item.id}>
                  <div className={styles.twoCols}>
                    <div className={styles.left}>
                      <div className={styles.contextWrapper}>
                        <div className={styles.contextContent}>
                          <div>{item.ques}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.questionsWrapper}>
                        {item.answers &&
                          item.answers.map((answer) => {
                            return (
                              <Question
                                number={answer.number}
                                text={answer.text}
                                answers={answer.answers}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      ) : (
        <>
          <div className={styles.contextWrapper}>
            {isImage ? (
              <div className={styles.contextContent}>
                <image
                  src="https://study4.com/media/tez_media1/img/ets_toeic_2022_test_1_95_97.png"
                  alt="image"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.questionsWrapper}>
            <Question />
          </div>
        </>
      )}
    </div>
  );
};
export default QuestionGroup;
