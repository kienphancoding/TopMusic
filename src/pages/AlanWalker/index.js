import cx from "clsx";
import { useRef, useEffect, useState } from "react";
import { AlanWalkerSongs } from "../../songs";
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
import AlanWalkerLists from "./AlanWalker"

const AlanWalker = () => {
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
    setIndexSong(indexSong === AlanWalkerSongs.length - 1 ? 0 : indexSong + 1);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong === 0 ? AlanWalkerSongs.length - 1 : indexSong - 1);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
  };

  const handleRandomSong = () => {
    for (let i = 0; i < AlanWalkerSongs.length; i++) {
      let random = Math.floor(Math.random() * AlanWalkerSongs.length);
      let temp;
      temp = AlanWalkerSongs[i];
      AlanWalkerSongs[i] = AlanWalkerSongs[random];
      AlanWalkerSongs[random] = temp;
    }
    setIndexSong(indexSong===0 ?indexSong+1 :0)
  };

  const playRef = useRef(1);
  const widthRef = useRef();

  //scroll into view
  useEffect(() => {
    const timeScrollIntoView = setTimeout(() => {
      document.getElementsByClassName(cx(style.active))[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 500);
    return () => clearTimeout(timeScrollIntoView);
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
    const timeSetWidth = setInterval(() => {
      document.getElementsByClassName(cx(style.duration))[0].style.width = `${
        (Math.floor(playRef.current.currentTime) /
          Math.floor(playRef.current.duration)) *
        100
      }%`;
    }, 500);
    return () => clearInterval(timeSetWidth);
  }, []);

  //auto next song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(playRef.current.currentTime) ===
        Math.floor(playRef.current.duration)
      ) {
        handleNextSong();
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [indexSong]);

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
        <img src={AlanWalkerSongs[indexSong].img} alt="img" />
        <div className={cx(style.intro)}>
          <h1>{AlanWalkerSongs[indexSong].song}</h1>
          <p>{AlanWalkerSongs[indexSong].name}</p>
        </div>
      </div>

      <AlanWalkerLists  indexSong={indexSong} setIndexSong={setIndexSong}/>

      <audio ref={playRef} src={AlanWalkerSongs[indexSong].src} />

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

export default AlanWalker;
