import { Link } from "react-router-dom";
import styles from "./Buttons.module.scss";
import { BsArrowRight } from "react-icons/bs";

const ArrowButton = ({ text, path }) => {
  return (
    <div className={styles.btn}>
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight />
    </div>
  );
};

ArrowButton.defaultProps = {
  text: "Test Btn",
  path: "/",
};

export { ArrowButton };
