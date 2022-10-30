import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const Play = ({ play, handlePause }) => {
  return (
    <>
      {!play && (
        <button onClick={handlePause}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faPause} />
        </button>
      )}
    </>
  );
};

export default memo(Play);
