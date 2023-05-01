import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <h1>Footer</h1>
    </div>
  );
}

export default Footer;
