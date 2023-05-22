import styles from "./ListPart.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

const cx = classNames.bind(styles);

const ListPart = ({ ...props }) => {
  const { title = "Part 1", data, listRes, isShowResult, resultDetail } = props;

  const isDone = useRef(false);
  const handleClickItem = () => {};

  const handleColorQues = (value) => {
    const temp = listRes.find((item) => {
      return item.number === value;
    });
    if (temp) {
      return true;
    } else return false;
  };
  // console.log(listQues);
  const handleCheckResult = (number) => {
    const user = listRes.find((item) => {
      return item.number === number;
    });
    const system = resultDetail.find((item) => {
      return item.number === number;
    });
    if (
      user?.result === system?.result &&
      user?.result !== undefined &&
      system?.result !== undefined &&
      user?.result !== null &&
      system?.result !== null
    ) {
      return true;
    } else return false;
  };
  const handleCheckResultInCorrect = (number) => {
    const user = listRes.find((item) => {
      return item.number === number;
    });
    const system = resultDetail.find((item) => {
      return item.number === number;
    });
    if (
      user?.result === system?.result &&
      user?.result !== null &&
      system?.result !== null
    ) {
      return false;
    } else return true;
  };
  const handleCheckResultSkip = (number) => {
    const user = listRes.find((item) => {
      return item.number === number;
    });
    const system = resultDetail.find((item) => {
      return item.number === number;
    });
    if (
      (user?.result && system?.result) === undefined ||
      (user?.result && system?.result) === null
    ) {
      return true;
    } else return false;
  };
  return (
    <div className={styles.wrapper}>
      <h6>{title}</h6>
      <div className={styles.inner}>
        {data &&
          data.map((item, index) => {
            if (isShowResult && listRes && resultDetail) {
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
