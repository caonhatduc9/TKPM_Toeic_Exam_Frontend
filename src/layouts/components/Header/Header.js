import { Button } from "react-bootstrap";
import images from "../../../assets/images";
import styles from "./Header.module.scss";
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

const logOut = () => {
  window.localStorage.removeItem("signin");
  // window.location.replace("http://localhost:3000/")
}

const Header = () => {

  const navigate = useNavigate();
  const myStyle = {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%"
  }

  const checkLogin = window.localStorage.getItem("signin");
  const data = JSON.parse(checkLogin);
  console.log("Data header: ", data);
  console.log("Email: ", data.data.email);
  // console.log("checkHeader: ", checkLogin);
  if (checkLogin == null) {
    return (
      <div className={styles.wrapper}>
        {/* <a href="http://localhost:3000/"> */}
        <a onClick={() => { navigate("/") }}>
          <img src={images.logo} alt="logo" width={50} height={50} />
        </a>
        <div className={styles.navLeft}>
          {/* <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
          <a className={styles.button} href="http://localhost:3000/minitest">Luyện tập kỹ năng</a>
          <a className={styles.button} href="http://localhost:3000/blog">Bài Blog</a>
          <a className={styles.button} href="#" >Ghi chú</a>
          <a className={styles.button} href="http://localhost:3000/signin">Đăng nhập</a> */}
          <a className={styles.button} onClick={() => { navigate("/fulltest") }}>Đề thi Online</a>
          <a className={styles.button} onClick={() => { navigate("/minitest") }}>Luyện tập kỹ năng</a>
          <a className={styles.button} onClick={() => { navigate("/blog") }}>Bài Blog</a>
          <a className={styles.button} href="#" >Ghi chú</a>
          <a className={styles.button} onClick={() => { navigate("/signin") }}>Đăng nhập</a>
        </div>
      </div>
    );
  }
  else {
    if (data.data.email !== "caoduc4work@gmail.com") {
      return (
        <div className={styles.wrapper}>
          {/* <a href="http://localhost:3000/"> */}
          <a onClick={() => { navigate("/") }}>
            <img src={images.logo} alt="logo" width={50} height={50} />
          </a>
          <div className={styles.navLeft}>
            {/* <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
            <a className={styles.button} href="http://localhost:3000/minitest">Luyện tập kỹ năng</a>
            <a className={styles.button} href="http://localhost:3000/blog">Bài Blog</a>
            <a className={styles.button} href="#">Ghi chú</a> */}

            <a className={styles.button} onClick={() => { navigate("/fulltest") }}>Đề thi Online</a>
            <a className={styles.button} onClick={() => { navigate("/minitest") }}>Luyện tập kỹ năng</a>
            <a className={styles.button} onClick={() => { navigate("/blog") }}>Bài Blog</a>
            <a className={styles.button} href="#">Ghi chú</a>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg"
                title="Drop large">
                Hi, USER!!!
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.sizeXL}>
             
                <Dropdown.Item onClick={() => { navigate("/profile") }}>Profile</Dropdown.Item>
                {/* <Dropdown.Item onClick={logOut} >Đăng xuất</Dropdown.Item> */}
                <Dropdown.Item onClick={() => { navigate("/signin") }} >Đăng xuất</Dropdown.Item>


              </Dropdown.Menu>
            </Dropdown>


          </div>
        </div>
      );
    }
    else {
      return (
        <div className={styles.wrapper}>
          {/* <a href="http://localhost:3000/"> */}
          <a onClick={() => { navigate("/") }}>
            <img src={images.logo} alt="logo" width={50} height={50} />
          </a>
          <div className={styles.navLeft}>
            {/* <a className={styles.button} href="http://localhost:3000/fulltest">Đề thi Online</a>
            <a className={styles.button} href="http://localhost:3000/minitest">Luyện tập kỹ năng</a>
            <a className={styles.button} href="http://localhost:3000/blog">Bài Blog</a>
            <a className={styles.button} href="#">Ghi chú</a> */}

            <a className={styles.button} onClick={() => { navigate("/fulltest") }}>Đề thi Online</a>
            <a className={styles.button} onClick={() => { navigate("/minitest") }}>Luyện tập kỹ năng</a>
            <a className={styles.button} onClick={() => { navigate("/blog") }}>Bài Blog</a>
            <a className={styles.button} href="#">Ghi chú</a>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg"
                title="Drop large">
                Hi, ADMIN!!!
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.sizeXL}>
                {/* <Dropdown.Item href="http://localhost:3000/profile">Profile</Dropdown.Item> */}
                <Dropdown.Item onClick={() => { navigate("/admin/managetest") }}>Profile</Dropdown.Item>
                {/* <Dropdown.Item onClick={logOut} >Đăng xuất</Dropdown.Item> */}
                <Dropdown.Item onClick={() => { navigate("/signin") }} >Đăng xuất</Dropdown.Item>


              </Dropdown.Menu>
            </Dropdown>


          </div>
        </div>
      );
    }


  }

};
export default Header;
