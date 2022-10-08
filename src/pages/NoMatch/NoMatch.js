import { memo } from "react";
import cx from "clsx";
import { songs } from "../../songs";
import style from "../Pages.module.scss";

const FullSongs = ({ indexSong, setIndexSong }) => {
  return (
    <div className={cx(style.list)}>
      {songs.map((x, index) => {
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

export default memo(FullSongs);
