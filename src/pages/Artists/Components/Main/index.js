import cx from "clsx";
import style from "./Main.module.scss";
import { memo } from "react";

const Main = ({ NewSongs, indexSong }) => {
  return (
    <div className={cx(style.main)}>
      <img
        src={
          indexSong > NewSongs.length - 1
            ? NewSongs[0].img
            : NewSongs[indexSong].img
        }
        alt="img"
      />
      <div className={cx(style.intro)}>
        <h1>
          {indexSong > NewSongs.length - 1
            ? NewSongs[0].song
            : NewSongs[indexSong].song}
        </h1>
        <p>
          {indexSong > NewSongs.length - 1
            ? NewSongs[0].name
            : NewSongs[indexSong].name}
        </p>
      </div>
    </div>
  );
};

export default memo(Main);
