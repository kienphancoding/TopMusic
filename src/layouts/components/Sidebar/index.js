import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const usukSingers = [
    { path: "/AlanWalker", name: "Alan Walker" },
    { path: "/TheChainsmokers", name: "The Chainsmokers" },
    { path: "/MartinGarrix", name: "Martin Garrix" },
  ];
  const kpop = [
    { path: "/BlackPink", name: "BLACKPINK" },
  ];
  return (
    <div className={cx(style.wrapper)}>
      <h1 to="/" className={cx(style.childrenTitle)}>
        <Link to="/">Trang chủ</Link>
      </h1>

      <h1 className={cx(style.childrenTitle)}>US UK</h1>
      {usukSingers.map((x, index) => {
        return (
          <Link className={cx(style.link)} to={x.path} key={index}>
            <img
              className={cx(style.img)}
              src="https://i.pinimg.com/564x/20/b8/c2/20b8c2debe1babec5aa6beb7f58d2ce9.jpg"
              alt="Img"
            />
            <p className={cx(style.name)}>{x.name}</p>
          </Link>
        );
      })}
      <h1 className={cx(style.childrenTitle)}>KPOP</h1>
      {kpop.map((x, index) => {
        return (
          <Link className={cx(style.link)} to={x.path} key={index}>
            <img
              className={cx(style.img)}
              src="https://i.pinimg.com/564x/20/b8/c2/20b8c2debe1babec5aa6beb7f58d2ce9.jpg"
              alt="Img"
            />
            <p className={cx(style.name)}>{x.name}</p>
          </Link>
        );
      })}
      <h1 className={cx(style.childrenTitle)}>EDM</h1>
      <h1 className={cx(style.childrenTitle)}>POP</h1>
      <h1 className={cx(style.childrenTitle)}>RAP</h1>
      <h1 className={cx(style.childrenTitle)}>CHILL</h1>
      <h1 className={cx(style.childrenTitle)}>KHÔNG LỜI</h1>
    </div>
  );
};

export default Sidebar;
