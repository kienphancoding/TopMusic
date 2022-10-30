import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const Loop = ({ loopSong, handleLoopSong }) => {
  return (
    <button
      onClick={handleLoopSong}
      className={loopSong === true ? cx(style.activeLoop) : cx(style.loop)}
    >
      <FontAwesomeIcon className={cx(style.icon)} icon={faRotateRight} />
    </button>
  );
};

export default memo(Loop);
