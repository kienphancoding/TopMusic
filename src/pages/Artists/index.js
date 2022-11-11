import cx from "clsx";
import { useRef, useEffect, useState, useCallback } from "react";
import style from "../Pages.module.scss";
import ListSongs from "../../layouts/components/ListSongs";
import { songs } from "../../songs";
import Main from "./Components/Main";
import NextSong from "./Components/NextSong";
import PrevSong from "./Components/PrevSong";
import Play from "./Components/Play";
import Pause from "./Components/Pause";
import Loop from "./Components/Loop";
import Random from "./Components/Random";
import { songsSidebars } from "../../routes/Artists";

const Artists = () => {
  const [play, setPlay] = useState(true); // true la hien nut play
  const [indexSong, setIndexSong] = useState(0); // vi tri hien tai cua bai hat
  const [loopSong, setLoopSong] = useState(false); // lap lai bai hat
  const [staticPlay, setStaticSong] = useState(() => {
    let array = [];
    songsSidebars.map(() => {
      array.push(0);
    });
    const jsonStorage = JSON.parse(localStorage.getItem("staticPlay"));
    return jsonStorage ?? array;
  });
  const [staticDuration, setStaticDuration] = useState(() => {
    let array = [];
    songsSidebars.map(() => {
      array.push(0);
    });
    const jsonStorage = JSON.parse(localStorage.getItem("staticDuration"));
    return jsonStorage ?? array;
  });

  const name = window.location.pathname.replace("/", "");

  useEffect(() => {
    setIndexSong(() => 0);
  }, [name]);

  const NewSongs = songs.filter((x) => {
    return x.name.replace(/ /g, "").toUpperCase().includes(name.toUpperCase());
  });

  const handlePlay = useCallback(() => {
    setPlay(() => false);
  }, []);

  const handlePause = useCallback(() => {
    setPlay(() => true);
  }, []);

  const handleNextSong = useCallback(() => {
    setIndexSong((prev) => {
      if (prev === NewSongs.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [name]);

  const handlePrevSong = useCallback(() => {
    setIndexSong((prev) => {
      if (prev === 0) {
        return NewSongs.length - 1;
      } else {
        return prev - 1;
      }
    });
  }, [name]);

  const handleLoopSong = useCallback(() => {
    setLoopSong(() => !loopSong);
  }, []);

  const handleRandomSong = useCallback(() => {
    for (let i = 0; i < songs.length; i++) {
      let random = Math.floor(Math.random() * songs.length);
      let temp;
      temp = songs[i];
      songs[i] = songs[random];
      songs[random] = temp;
    }
    setIndexSong(indexSong === 0 ? indexSong + 1 : 0);
  }, []);

  const playRef = useRef(1);
  const RefWidth = useRef();

  //scroll into view
  useEffect(() => {
    const timeScrollIntoView = setTimeout(() => {
      document.getElementsByClassName(cx(style.active))[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 300);
    return () => clearTimeout(timeScrollIntoView);
  }, [indexSong]);

  //event set currtime song
  const checkWidth = (e) => {
    let width = RefWidth.current.clientWidth;
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
          Math.floor(playRef.current.duration) - 1 &&
        loopSong
      ) {
        playRef.current.currentTime = 0;
        setLoopSong(() => false);
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [loopSong, indexSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      playRef.current.play();
    } else {
      playRef.current.pause();
    }
  }, [play, indexSong, loopSong, name]);

  //static play
  useEffect(() => {
    for (let i = 0; i <= songsSidebars.length - 1; i++) {
      if (songsSidebars[i].path.includes(name) && !play) {
        staticPlay[i]++;
      }
    }
    localStorage.setItem("staticPlay", JSON.stringify(staticPlay));
  }, [indexSong, name, loopSong,play]);

  //static duration
  useEffect(() => {
    let timerId = setInterval(() => {
      for (let i = 0; i <= songsSidebars.length - 1; i++) {
        if (songsSidebars[i].path.includes(name) && !play) {
          staticDuration[i]++;
        }
      }
      localStorage.setItem("staticDuration", JSON.stringify(staticDuration));
    }, 1000);

    return () => clearInterval(timerId);
  }, [indexSong, name,play, loopSong]);

  return (
    <div className={cx(style.wrapper)}>
      <Main NewSongs={NewSongs} indexSong={indexSong} />

      <ListSongs
        indexSong={indexSong}
        setIndexSong={setIndexSong}
        name={name}
      />

      <audio
        ref={playRef}
        src={
          indexSong > NewSongs.length - 1
            ? NewSongs[0].src
            : NewSongs[indexSong].src
        }
      />

      <div
        className={cx(style.durationBar)}
        ref={RefWidth}
        onClick={checkWidth}
      >
        <div className={cx(style.duration)}></div>
      </div>
      <div className={cx(style.menu)}>
        <Loop loopSong={loopSong} handleLoopSong={handleLoopSong} />

        <PrevSong handlePrevSong={handlePrevSong} />

        <Play play={play} handlePlay={handlePlay} />

        <Pause play={play} handlePause={handlePause} />

        <NextSong handleNextSong={handleNextSong} />

        <Random handleRandomSong={handleRandomSong} />
      </div>
    </div>
  );
};

export default Artists;
