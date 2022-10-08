import { memo } from "react";
import cx from "clsx";
import { BLACKPINK } from "../../songs";
import style from "../Pages.module.scss";

const BlackPinkSongs = ({ indexSong, setIndexSong }) => {
  return (
    <div className={cx(style.list)}>
      {BLACKPINK.map((x, index) => {
        return (
          <div
            className={
              indexSong === index
                ? cx(style.item, style.active)
                : cx(style.item)
            }
            key={index}
            onClick={() => setIndexSong(index)}
          >
            <img className={cx(style.img)} src={x.img} alt={x.name} />
            <div className={cx(style.info)}>
              <h1>{x.song}</h1>
              <p>{x.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(BlackPinkSongs);
