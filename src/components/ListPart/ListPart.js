import styles from "./ListPart.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

const cx = classNames.bind(styles);

const ListPart = ({ ...props }) => {
  const {
    title = "Part 1",
    data,
    listRes,
    isShowResult,
    userResult,
    resultDetail,
  } = props;
  // const [isDone, setIsDone] = useState(true);
  // console.log(111, listRes);
  // console.log(555, data);

  const isDone = useRef(false);
  const handleClickItem = () => {};
  // useEffect(() => {
  //   let temp = [];
  //   data &&
  //     data.forEach((item) => {
  //       temp = _.concat(temp, item?.answers);
  //     });
  //   setListQues(temp);
  // }, [data]);
  // console.log(listQues);

  const handleColorQues = (value) => {
    const check = false;
    const temp = listRes.find((item) => {
      return item.number === value;
    });
    if (temp) {
      return true;
    } else return false;
  };
  // console.log(listQues);
  const handleCheckResult = (number) => {
    const user = userResult.find((item) => {
      return item.numQuestion === number;
    });
    const system = resultDetail.find((item) => {
      return item.numQuestion === number;
    });
    if (
      user?.result === system?.result &&
      user?.result &&
      system?.result !== undefined
    ) {
      return true;
    } else return false;
  };
  const handleCheckResultInCorrect = (number) => {
    const user = userResult.find((item) => {
      return item.numQuestion === number;
    });
    const system = resultDetail.find((item) => {
      return item.numQuestion === number;
    });
    if (user?.result === system?.result) {
      return false;
    } else return true;
  };
  const handleCheckResultSkip = (number) => {
    const user = userResult.find((item) => {
      return item.numQuestion === number;
    });
    const system = resultDetail.find((item) => {
      return item.numQuestion === number;
    });
    if ((user?.result && system?.result) === undefined) {
      return true;
    } else return false;
  };
  return (
    <div className={styles.wrapper}>
      <h6>{title}</h6>
      <div className={styles.inner}>
        {data &&
          data.map((item, index) => {
            if (isShowResult && userResult && resultDetail) {
              return (
                <span
                  key={index}
                  className={cx(
                    "list-part-item",
                    {
                      isCorrect: handleCheckResult(item?.numQuestion),
                    },
                    {
                      isInCorrect: handleCheckResultInCorrect(
                        item?.numQuestion
                      ),
                    },
                    {
                      isSkip: handleCheckResultSkip(item?.numQuestion),
                    }
                  )}
                  onClick={handleClickItem}
                >
                  {item?.numQuestion}
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  className={cx("list-part-item", {
                    done: handleColorQues(item?.numQuestion),
                  })}
                  onClick={handleClickItem}
                >
                  {item?.numQuestion}
                </span>
              );
            }
          })}
      </div>
    </div>
  );
};
export default ListPart;
