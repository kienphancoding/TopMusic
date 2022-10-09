import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  const menu =[ 
    {path:"/EDM",name:"EDM"},
    {path:"/Tiktok",name:"Tiktok"},
    {path:"/Ballad",name:"Ballad"},
    {path:"/Viral",name:"Viral"},
    {path:"/Bang",name:"Bang"},
    {path:"/KhongLoi",name:"Không lời"},
    {path:"/Chill",name:"Chill"},
    {path:"/CoDien",name:"Cổ điển"},
  ]
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.logo)}>
        <Link  to="/">TopMusic</Link>
      </div>

      <div className={cx(style.menu)}>
        
        {menu.map((x,index)=>{
          return(
            <Link style={window.location.pathname===x.path?{backgroundColor:`var(--color-3)`}:{}} key={index} to={x.path} >
              {x.name}
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Header;
