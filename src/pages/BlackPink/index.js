import cx from "clsx";
import { useRef, useEffect, useState } from "react";
import { BLACKPINK } from "../../songs";
import style from "../Pages.module.scss";
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faRotateRight,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackPinkSongs from "./BlackPink"


const BlackPink = () => {
  const [play, setPlay] = useState(true); // true la hien nut play
  const [indexSong, setIndexSong] = useState(0); // vi tri hien tai cua bai hat
  const [loopSong, setLoopSong] = useState(false); // lap lai bai hat

  const handlePlay = () => {
    setPlay(false);
  };

  const handlePause = () => {
    setPlay(true);
  };

  const handleNextSong = () => {
    setIndexSong(indexSong === BLACKPINK.length - 1 ? 0 : indexSong + 1);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong === 0 ? BLACKPINK.length - 1 : indexSong - 1);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
  };

  const handleRandomSong = () => {
    for (let i = 0; i < BLACKPINK.length; i++) {
      let random = Math.floor(Math.random() * BLACKPINK.length);
      let temp;
      temp = BLACKPINK[i];
      BLACKPINK[i] = BLACKPINK[random];
      BLACKPINK[random] = temp;
    }
    setIndexSong(indexSong===0 ?indexSong+1 :0)
  };

  const blackpinkRef = useRef(1);
  const widthRefBlackPink = useRef();

  //scroll into view
  useEffect(() => {
    const timeScrollIntoViewBlackPink = setTimeout(() => {
      document.getElementsByClassName(cx(style.active))[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
    return () => clearTimeout(timeScrollIntoViewBlackPink);
  }, [indexSong]);

  //event set currtime song
  const checkWidth = (e) => {
    let width = widthRefBlackPink.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = offset / width;
    blackpinkRef.current.currentTime = progress * blackpinkRef.current.duration;
  };

  //set width current time song
  useEffect(() => {
    const timeSetWidthBlackPink = setInterval(() => {
      document.getElementsByClassName(cx(style.duration))[0].style.width = `${
        (Math.floor(blackpinkRef.current.currentTime) /
          Math.floor(blackpinkRef.current.duration)) *
        100
      }%`;
    }, 500);
    return () => clearInterval(timeSetWidthBlackPink);
  }, []);

  //loop song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(blackpinkRef.current.currentTime) ===
          Math.floor(blackpinkRef.current.duration) &&
        loopSong === true
      ) {
        blackpinkRef.current.currentTime = 0;
        setLoopSong(false);
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [loopSong]);

  //auto next song
  useEffect(() => {
    const timeCheckLoopBlackPink = setInterval(() => {
      if (
        Math.floor(blackpinkRef.current.currentTime) ===
        Math.floor(blackpinkRef.current.duration)
      ) {
        handleNextSong();
      }
    }, 100);
    return () => clearInterval(timeCheckLoopBlackPink);
  }, [indexSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      blackpinkRef.current.play();
    } else {
      blackpinkRef.current.pause();
    }
  }, [play, indexSong, loopSong]);

  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.main)}>
        <img src={BLACKPINK[indexSong].img} alt="img" />
        <div className={cx(style.intro)}>
          <h1>{BLACKPINK[indexSong].song}</h1>
          <p>{BLACKPINK[indexSong].name}</p>
        </div>
      </div>

      <BlackPinkSongs indexSong={indexSong} setIndexSong={setIndexSong}/>

      <audio ref={blackpinkRef} src={BLACKPINK[indexSong].src} />
      <div
        className={cx(style.durationBar)}
        ref={widthRefBlackPink}
        onClick={checkWidth}
      >
        <div className={cx(style.duration)}></div>
      </div>
      <div className={cx(style.menu)}>
        <button
          onClick={handleLoopSong}
          className={loopSong === true ? cx(style.activeLoop) : cx(style.loop)}
        >
          <FontAwesomeIcon className={cx(style.icon)} icon={faRotateRight} />
        </button>
        <button onClick={handlePrevSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faBackwardStep} />
        </button>
        {play && (
          <button onClick={handlePlay}>
            <FontAwesomeIcon className={cx(style.icon)} icon={faPlay} />
          </button>
        )}

        {!play && (
          <button onClick={handlePause}>
            <FontAwesomeIcon className={cx(style.icon)} icon={faPause} />
          </button>
        )}

        <button onClick={handleNextSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faForwardStep} />
        </button>
        <button onClick={handleRandomSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faShuffle} />
        </button>
      </div>
    </div>
  );
};

export default BlackPink;
