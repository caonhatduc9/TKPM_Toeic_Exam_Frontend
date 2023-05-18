import images from "../../../assets/images";
import styles from "./Header.module.scss";
const Header = () => {
  const myStyle = {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%"
  }
  return (
    <div className={styles.wrapper}>
      <a href="http://localhost:3000/">
        <img src={images.logo} alt="logo" width={50} height={50} />
      </a>
      <div className="nav-left">
        <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
        <a className={styles.button} href="#">Luyện tập kỹ năng</a>
        <a className={styles.button} href="#">Bài Blog</a>
        <a className={styles.button} href="#">Ghi chú</a>
        <a href="http://localhost:3000/profile">
          <img src={"https://cdn.popsww.com/blog/sites/2/2021/03/nobita-la-ai.jpg"} alt="pictureProfile" className={styles.imgProfile} style={myStyle} />
        </a>
      </div>
    </div>
  );
};
export default Header;
