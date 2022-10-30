import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const Play = ({ play, handlePlay }) => {
  return (
    <>
      {play && (
        <button onClick={handlePlay}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faPlay} />
        </button>
      )}
    </>
  );
};

export default memo(Play);
