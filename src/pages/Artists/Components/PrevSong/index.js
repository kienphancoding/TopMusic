import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const PrevSong = ({ handlePrevSong }) => {
  return (
    <button onClick={handlePrevSong}>
      <FontAwesomeIcon className={cx(style.icon)} icon={faBackwardStep} />
    </button>
  );
};

export default memo(PrevSong);
