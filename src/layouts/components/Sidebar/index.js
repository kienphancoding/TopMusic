import {
  faChartColumn,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";
import { songsSidebars } from "../../../routes/Artists";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { trendingSidebars } from "../../../routes/Trending";

const Sidebar = () => {
  function compareValues(key, order = "asc") {
    return function (a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // nếu không tồn tại
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  songsSidebars.sort(compareValues("name"));

  const sidebarItem = [
    { path: "/", content: "Trang chủ", icon: faHouse },
    { path: "/search", content: "Tìm kiếm", icon: faMagnifyingGlass },
    { path: "/static", content: "Thống kê", icon: faChartColumn },
  ];

  return (
    <div className={cx(style.wrapper)}>
      {sidebarItem.map((x, index) => {
        return (
          <Link
            key={index}
            style={
              window.location.pathname === x.path
                ? { backgroundColor: `var(--color-3)` }
                : {}
            }
            className={cx(style.link)}
            to={x.path}
          >
            <FontAwesomeIcon className={cx(style.icon)} icon={x.icon} />
            <p className={cx(style.name)}>{x.content}</p>
          </Link>
        );
      })}

      {trendingSidebars.map((x, index) => {
        return (
          <Link
            key={index}
            style={
              window.location.pathname.includes(x.path)
                ? { backgroundColor: `var(--color-3)` }
                : {}
            }
            className={cx(style.link)}
            to={x.path}
          >
            <FontAwesomeIcon className={cx(style.icon)} icon={faTiktok} />
            <p className={cx(style.name)}>{x.name}</p>
          </Link>
        );
      })}

      {songsSidebars.map((x, index) => {
        return (
          <Link
            style={
              window.location.pathname === x.path
                ? { backgroundColor: `var(--color-3)` }
                : {}
            }
            className={cx(style.link)}
            to={x.path}
            key={index}
          >
            <img className={cx(style.img)} src={x.img} alt={x.name} />
            <p className={cx(style.name)}>{x.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
