import cx from "clsx";
import style from "../Layout.module.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

const DefaultLayout = ({ children }) => {
  useEffect(() => {
    console.clear();
  }, []);
  
  return (
    <div className={cx(style.container)}>
      <Header />
      <Sidebar />
      <div className={cx(style.content)}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
