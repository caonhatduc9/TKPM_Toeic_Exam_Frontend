import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import images from "../../../assets/images";

const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={styles.footerLeft}>
        <ul>
          <li style={{ fontWeight: '700'}}>Toeic</li>
          <li>Thi theo đề</li>
          <li>Luyện tập Listening</li>
          <li>Luyện tập Reading</li>
          <li>Luyện tập MiniTest</li>
        </ul>

        <ul>
          <li style={{ fontWeight: '700'}}>Tài nguyên</li>
          <li>Mẹo làm Listeing hiệu quả</li>
          <li>Hướng dẫn đăng ký thi Toeic</li>
          <li>Tài liệu ôn thi 600+</li>
          <li>Cộng đồng Facebook</li>
        </ul>

        <ul>
          <li style={{ fontWeight: '700'}}>Hỗ trợ</li>
          <li>Hướng dẫn sử dụng</li>
          <li>Chính sách đăng ký thi thử</li>
          <li>Chăm sóc khách hàng</li>
          <li>Phản hồi khiếu nại</li>
        </ul>

        <ul>
          <li style={{ fontWeight: '700'}}>ToeicExam</li>
          <li>Về chúng tôi</li>
          <li>Liên hệ</li>
          <li>Điều khoản bảo mật</li>
          <li>Điều khoản sử dụng</li>
        </ul>
      </div>

      <div className={styles.footerRight}>
      <img src={images.logo} alt="logo" width={50} height={50} />
      <div className={styles.logos}>
      <i class="fa-brands fa-facebook" style={{color: "blue", marginRight: "1rem"}}></i>
      <i class="fa-brands fa-twitter" style={{color: "#1da1f2", marginRight: "1rem"}}></i>
      <i class="fa-brands fa-youtube" style={{color: "red", marginRight: "1rem"}}></i>
      <i class="fa-brands fa-instagram" style={{color: "red", marginRight: "1rem"}}></i>
      </div>
      <h3 style={{fontSize: "1.5rem", fontWeight: "700"}}>
        Địa chỉ trụ sở: 
      </h3>
      <p style={{fontSize: "1.2rem"}}>
        Đồ Sơn, phường 4, quận Tân Bình
      </p>
      </div>
    </div>
  );
}

export default Footer;
