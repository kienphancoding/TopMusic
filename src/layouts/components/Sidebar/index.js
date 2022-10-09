import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "clsx";
import { Link } from "react-router-dom";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  const songsSidebars = [
    {
      path: "/AlanWalker",
      name: "Alan Walker",
      img: "https://i.pinimg.com/564x/20/b8/c2/20b8c2debe1babec5aa6beb7f58d2ce9.jpg",
    },
    { path: "/TheChainsmokers", name: "The Chainsmokers",img: "https://i.pinimg.com/564x/62/f9/7f/62f97f82e3776069f844c2e31b4f7d31.jpg", },
    { path: "/MartinGarrix", name: "Martin Garrix",img:"https://i.pinimg.com/564x/33/5f/2b/335f2b49c7d4a29c63ad730f6307aca6.jpg" },
    { path: "/BlackPink", name: "BLACKPINK" ,img:"https://i.pinimg.com/564x/91/42/d1/9142d1020f780106cbdc0a22c5f09897.jpg"},
    { path: "/Maroon5", name: "Maroon 5",img:"https://i.pinimg.com/564x/fd/ca/09/fdca096c1ae27ea5b1a59bc40641dcd8.jpg" },
    { path: "/ImagineDragons", name: "Imagine Dragons",img:"https://i.pinimg.com/564x/c1/14/d4/c114d4e09b49713becb24c6adad9b58a.jpg" },
    { path: "/CharliePuth", name: "Charlie Puth" ,img:"https://i.pinimg.com/564x/53/86/4f/53864fe09b19fc9b28732fa4723c08ae.jpg"},
    { path: "/EdSheeran", name: "Ed Sheeran" ,img:"https://i.pinimg.com/564x/bb/19/b4/bb19b4dd41ec6062f594527a5b296975.jpg"},
    { path: "/BrunoMars", name: "Bruno Mars" ,img:"https://i.pinimg.com/564x/3a/97/97/3a97970e071277096c9fcd29742846c5.jpg"},
    { path: "/DuaLipa", name: "Dua Lipa" ,img:"https://i.pinimg.com/564x/2b/cd/76/2bcd765879e81e8e253953144a8c1bd8.jpg"},
    { path: "/Eminem", name: "Eminem" ,img:"https://i.pinimg.com/736x/d9/92/32/d9923234c33089c7c70546c8ef1d1a66.jpg"},
    { path: "/TaylorSwift", name: "Taylor Swift" ,img:"https://i.pinimg.com/564x/0a/1a/48/0a1a48c5f057c4d2adfd7dd67a0676f3.jpg"},
    { path: "/JustinBeiber", name: "JustinBeiber" ,img:"https://i.pinimg.com/736x/0f/fa/31/0ffa3121148fb80f493f86d098eb494e.jpg"},
    { path: "/Rihanna", name: "Rihanna" ,img:"https://i.pinimg.com/564x/5f/a5/97/5fa59705a81c9c9194ec4b2b43ee3663.jpg"},
    { path: "/DjSnake", name: "Dj Snake" ,img:"https://i.pinimg.com/564x/15/1c/8c/151c8c9c2446b1b1f134ff909d063209.jpg"},
    { path: "/ShawnMendes", name: "Shawn Mendes" ,img:"https://i.pinimg.com/564x/fa/e6/0e/fae60e185aef3af026988192c4278a78.jpg"},
    { path: "/Avicii", name: "Avicii" ,img:"https://i.pinimg.com/564x/b6/a6/db/b6a6dbdca24739eecca36ff94a666ea3.jpg"},
    { path: "/Coldplay", name: "Coldplay" ,img:"https://i.pinimg.com/564x/cb/3a/44/cb3a4474a1e5bd33ecffefd0640c920e.jpg"},
    { path: "/ArianaGrande", name: "Ariana Grande" ,img:"https://i.pinimg.com/564x/1c/a2/95/1ca295f19790fbf62dd1a09c7822f559.jpg"},
    { path: "/CalvinHarris", name: "Calvin Harris" ,img:"https://i.pinimg.com/564x/00/b4/72/00b4728a47fdf1d0d8202c28257aba29.jpg"},
  ];

  return (
    <div className={cx(style.wrapper)}>
      <Link style={window.location.pathname==="/"?{backgroundColor:`var(--color-3)`}:{}} className={cx(style.link)} to="/">
        <FontAwesomeIcon className={cx(style.icon)} icon={faHouse} />
        <p className={cx(style.name)}>Trang chủ</p>
      </Link>

      {songsSidebars.map((x, index) => {
        return (
          <Link style={window.location.pathname===x.path?{backgroundColor:`var(--color-3)`}:{}} className={cx(style.link)} to={x.path} key={index}>
            <img className={cx(style.img)} src={x.img} alt={x.name} />
            <p className={cx(style.name)}>{x.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
