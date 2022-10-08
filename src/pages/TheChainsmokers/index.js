import cx from "clsx";
import { useRef, useEffect, useState } from "react";
import { TheChainsmokers } from "../../songs";
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

const THECHAINSMOKERS = () => {
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
    setIndexSong(indexSong === TheChainsmokers.length - 1 ? 0 : indexSong + 1);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong === 0 ? TheChainsmokers.length - 1 : indexSong - 1);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
  };

  const handleRandomSong = () => {
    for (let i = 0; i < TheChainsmokers.length; i++) {
      let random = Math.floor(Math.random() * TheChainsmokers.length);
      let temp;
      temp = TheChainsmokers[i];
      TheChainsmokers[i] = TheChainsmokers[random];
      TheChainsmokers[random] = temp;
    }
    setPlay(!play);
    setIndexSong(0)
  };

  const playRef = useRef(1);
  const widthRef = useRef();

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
    let width = widthRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = offset / width;
    playRef.current.currentTime = progress * playRef.current.duration;
  };

  //set width current time song
  useEffect(() => {
    const timeSetWidthBlackPink = setInterval(() => {
      document.getElementsByClassName(cx(style.duration))[0].style.width = `${
        (Math.floor(playRef.current.currentTime) /
          Math.floor(playRef.current.duration)) *
        100
      }%`;
    }, 500);
    return () => clearInterval(timeSetWidthBlackPink);
  }, []);

  //loop song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(playRef.current.currentTime) ===
          Math.floor(playRef.current.duration) &&
        loopSong === true
      ) {
        playRef.current.currentTime = 0;
        setLoopSong(false);
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [loopSong]);

  //auto next song
  useEffect(() => {
    const timeCheckLoopBlackPink = setInterval(() => {
      if (
        Math.floor(playRef.current.currentTime) ===
        Math.floor(playRef.current.duration)
      ) {
        handleNextSong();
      }
    }, 100);
    return () => clearInterval(timeCheckLoopBlackPink);
  }, [indexSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      playRef.current.play();
    } else {
      playRef.current.pause();
    }
  }, [play, indexSong, loopSong]);

  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.main)}>
        <img src={TheChainsmokers[indexSong].img} alt="img" />
        <div className={cx(style.intro)}>
          <h1>{TheChainsmokers[indexSong].song}</h1>
          <p>{TheChainsmokers[indexSong].name}</p>
        </div>
      </div>
      <div className={cx(style.list)}>
        {TheChainsmokers.map((x, index) => {
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
      <audio ref={playRef} src={TheChainsmokers[indexSong].src} />
      <div
        className={cx(style.durationBar)}
        ref={widthRef}
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

export default THECHAINSMOKERS;
