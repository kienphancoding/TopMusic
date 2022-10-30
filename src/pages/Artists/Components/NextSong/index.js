import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import style from "../../../Pages.module.scss";
import cx from "clsx";
import { memo } from "react";

const NextSong = ({ handleNextSong }) => {
  return (
    <button onClick={handleNextSong}>
      <FontAwesomeIcon className={cx(style.icon)} icon={faForwardStep} />
    </button>
  );
};

export default memo(NextSong);
