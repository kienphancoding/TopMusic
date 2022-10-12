import { memo } from "react";
import cx from "clsx";
import { songs } from "../../../songs";
import style from "../../../pages/Pages.module.scss";

const ListSongs = ({ indexSong, setIndexSong, name }) => {
  const NewSongs = songs.filter((x)=>{
    return x.name.includes(name);
  })
  return (
    <div className={cx(style.list)}>
      {NewSongs.map((x, index) => {
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

export default memo(ListSongs);
