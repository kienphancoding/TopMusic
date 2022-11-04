import clsx from "clsx";
import style from "./Static.module.scss";
import { songsSidebars } from "../../routes/Artists";
import { useEffect } from "react";

const Static = () => {
  const storage = JSON.parse(localStorage.getItem("static")) ?? [];

  //check and set init static
  useEffect(() => {
    if (
      localStorage.getItem("static") === null &&
      JSON.parse(localStorage.getItem("static").length !== songsSidebars.length)
    ) {
      let array = [];
      songsSidebars.map(() => {
        array.push(0);
      });
      localStorage.setItem("static", JSON.stringify(array));
    }
  }, []);

  return (
    <div className={clsx(style.wrapper)}>
      {songsSidebars.map((x, index) => {
        return (
          <div className={clsx(style.item)} key={index}>
            <img src={x.img} alt={x.name} />
            <div
              style={{ width: `${storage[index]}px` }}
              className={clsx(style.count)}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Static;
