import cx from "clsx";
import style from "../Layout.module.scss";
import Header from "../components/Header";

const HeaderOnly = ({children}) => {
  return (
    <div className={cx(style.container)}>
      <Header />
      <div className={cx(style.content)}>{children}</div>
    </div>
  );
};

export default HeaderOnly;
