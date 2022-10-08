import cx from "clsx";
import { useRef, useEffect, useState } from "react";
import { songs } from "../../songs";
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
import { Link } from "react-router-dom";
import FullSongs from "./NoMatch"
const NoMatch = () => {
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
    setIndexSong(indexSong === songs.length - 1 ? 0 : indexSong + 1);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong === 0 ? songs.length - 1 : indexSong - 1);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
  };

  const handleRandomSong = () => {
    for (let i = 0; i < songs.length; i++) {
      let random = Math.floor(Math.random() * songs.length);
      let temp;
      temp = songs[i];
      songs[i] = songs[random];
      songs[random] = temp;
    }
    setIndexSong(indexSong===0 ?indexSong+1 :0)
  };

  const noRef = useRef(1);
  const RefWidth = useRef();

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
    let width = RefWidth.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = offset / width;
    noRef.current.currentTime = progress * noRef.current.duration;
  };

  //set width current time song
  useEffect(() => {
    const timeSetWidth = setInterval(() => {
      document.getElementsByClassName(cx(style.duration))[0].style.width = `${
        (Math.floor(noRef.current.currentTime) /
          Math.floor(noRef.current.duration)) *
        100
      }%`;
    }, 500);
    return () => clearInterval(timeSetWidth);
  }, []);

  //auto next song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(noRef.current.currentTime) ===
        Math.floor(noRef.current.duration)
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
        Math.floor(noRef.current.currentTime) ===
          Math.floor(noRef.current.duration) &&
        loopSong === true
      ) {
        noRef.current.currentTime = 0;
        setLoopSong(false);
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [loopSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      noRef.current.play();
    } else {
      noRef.current.pause();
    }
  }, [play, indexSong, loopSong]);
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.main)}>
        <img src={songs[indexSong].img} alt="img" />
        <div className={cx(style.intro)}>
          <h1>{songs[indexSong].song}</h1>
          <p>{songs[indexSong].name}</p>
        </div>
      </div>
      
      <FullSongs indexSong={indexSong} setIndexSong={setIndexSong}/>

      <audio ref={noRef} src={songs[indexSong].src} />

      <div
        className={cx(style.durationBar)}
        ref={RefWidth}
        onClick={checkWidth}
      >
        <div className={cx(style.duration)}></div>
      </div>
      <div className={cx(style.menu)}>
        <Link to="/">
          <button style={{ fontSize: "20px", fontWeight: 600 }}>HOME</button>
        </Link>

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
        <button
          onClick={() => window.history.back()}
          style={{ fontSize: "20px", fontWeight: 600 }}
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default NoMatch;
