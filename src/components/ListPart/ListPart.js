import styles from "./ListPart.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import _ from "lodash";

const cx = classNames.bind(styles);

const ListPart = ({ ...props }) => {
  const { title = "Part 1", data, listRes } = props;
  // const [isDone, setIsDone] = useState(true);
  // console.log(111, listRes);
  const [listQues, setListQues] = useState();
  const isDone = useRef(false);
  const handleClickItem = () => {};
  useEffect(() => {
    let temp = [];
    data &&
      data.forEach((item) => {
        temp = _.concat(temp, item?.answers);
      });
    setListQues(temp);
  }, [data]);
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

  return (
    <div className={styles.wrapper}>
      <h6>{title}</h6>
      <div className={styles.inner}>
        {listQues &&
          listQues.map((item) => {
            return (
              <span
                key={item?.number}
                className={cx("list-part-item", {
                  done: handleColorQues(item.number),
                })}
                onClick={handleClickItem}
              >
                {item?.number}
              </span>
            );
          })}
      </div>
    </div>
  );
};
export default ListPart;
