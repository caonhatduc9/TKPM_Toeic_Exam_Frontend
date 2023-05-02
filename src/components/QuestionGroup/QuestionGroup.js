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
  const { isImage, isTwoCol, data } = props;
  return (
    <div className={styles.wrapper}>
      {isTwoCol ? (
        <div className={styles.twoCol}>
          <div className={styles.left}>
            <div className={styles.contextWrapper}>
              <div className={styles.contextContent}>
                <div>
                  To continue providing the highest level of ----- (131) to our
                  corporate tenants, we have scheduled the south lobby restrooms
                  for maintenance this weekend, May 13 and May 14. ----- (132)
                  this time, the restrooms will be out of order, so tenants and
                  their guests should instead use the facilities in the north
                  lobby. We ----- (133) for any inconvenience this might cause.
                  -----(134). Denville Property Management Partners
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
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
