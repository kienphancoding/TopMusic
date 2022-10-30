import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.logo)}>
        <Link to="/">TopMusic</Link>
      </div>
    </div>
  );
};

export default Header;
