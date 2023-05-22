import { Button } from "react-bootstrap";
import images from "../../../assets/images";
import styles from "./Header.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';

const logOut = () => {
  window.localStorage.removeItem("signin");
  window.location.replace("http://localhost:3000/")
}

const Header = () => {
  const myStyle = {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%"
  }

  const checkLogin = window.localStorage.getItem("signin");
  console.log("checkHeader: ", checkLogin);
  if (checkLogin == null) {
    return (
      <div className={styles.wrapper}>
        <a href="http://localhost:3000/">
          <img src={images.logo} alt="logo" width={50} height={50} />
        </a>
        <div className={styles.navLeft}>
          <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
          <a className={styles.button} href="#">Luyện tập kỹ năng</a>
          <a className={styles.button} href="http://localhost:3000/blog">Bài Blog</a>
          <a className={styles.button} href="#">Ghi chú</a>
          <a className={styles.button} href="http://localhost:3000/signin">Đăng nhập</a>
        </div>
      </div>
    );
  }
  else {
    return (
      <div className={styles.wrapper}>
        <a href="http://localhost:3000/">
          <img src={images.logo} alt="logo" width={50} height={50} />
        </a>
        <div className={styles.navLeft}>
          <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
          <a className={styles.button} href="http://localhost:3000/minitest">Luyện tập kỹ năng</a>
          <a className={styles.button} href="http://localhost:3000/blog">Bài Blog</a>
          <a className={styles.button} href="#">Ghi chú</a>
      
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg"
            title="Drop large">
              Hi, USER!!!
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.sizeXL}>
              <Dropdown.Item href="http://localhost:3000/profile">Profile</Dropdown.Item>
              <Dropdown.Item onClick={logOut} >Đăng xuất</Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>
          
        
        </div>
      </div>
    );

  }

};
export default Header;
