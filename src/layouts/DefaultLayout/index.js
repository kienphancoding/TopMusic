import cx from "clsx";
import style from "../Layout.module.scss"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const DefaultLayout = ({children}) => {
    return (
        <div className={cx(style.container)}>
            <Header />
            <Sidebar />
            <div className={cx(style.content)}>{children}</div>
        </div>
      );
}
 
export default DefaultLayout;