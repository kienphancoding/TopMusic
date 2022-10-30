import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const Random = ({ handleRandomSong }) => {
  return (
    <button onClick={handleRandomSong}>
      <FontAwesomeIcon className={cx(style.icon)} icon={faShuffle} />
    </button>
  );
};

export default memo(Random);
