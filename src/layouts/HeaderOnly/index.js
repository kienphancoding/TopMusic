import cx from "clsx";
import style from "../Layout.module.scss";
import Header from "../components/Header";
import { useEffect } from "react";

const HeaderOnly = ({ children }) => {
  useEffect(() => {
    console.clear();
  }, []);
  
  return (
    <div className={cx(style.container)}>
      <Header />
      <div className={cx(style.content)}>{children}</div>
    </div>
  );
};

export default HeaderOnly;
