import styles from "./ListPart.module.scss";
import classNames from "classnames/bind";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

const ListPart = ({ ...props }) => {
  const { title = "Part 1", data } = props;
  // const [isDone, setIsDone] = useState(true);
  console.log(111, data);
  const isDone = useRef(false);
  const handleClickItem = () => {};
  return (
    <div className={styles.wrapper}>
      <h6>{title}</h6>
      <div className={styles.inner}>
        <span
          className={cx("list-part-item", {
            // ["done"]: isDone.current,
          })}
          onClick={handleClickItem}
        >
          1
        </span>
      </div>
    </div>
  );
};
export default ListPart;
