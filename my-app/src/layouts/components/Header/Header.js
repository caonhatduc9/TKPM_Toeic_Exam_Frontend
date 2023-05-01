import images from "../../../assets/images";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Header </h1>
      <img src={images.logo} alt="logo" width={50} height={50} />
    </div>
  );
};
export default Header;
