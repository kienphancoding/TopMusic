import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.logo)}>
        <Link to="/">TopMusic</Link>
      </div>

      

      <div className={cx(style.menu)}>
        <Link to="/statics" className={cx(style.statics)}>
          <FontAwesomeIcon icon={faChartColumn} />
        </Link>
        <Link to="/favorites" className={cx(style.favorites)}>
          <FontAwesomeIcon icon={faHeart} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
