import cx from "clsx";
import { useRef, useEffect, useState } from "react";
import { songs } from "../../songs";
import style from "../Pages.module.scss";
import Song28 from "./y2mate.com - Vbee   Text To Speech   Công cụ chuyển văn bản thành giọng nói and 5 more pages   Personal   Microso.mp3";
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faRotateRight,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import FullSongs from "../NoMatch/NoMatch";
const Search = () => {
  const [play, setPlay] = useState(true); // true la hien nut play
  const [indexSong, setIndexSong] = useState(0); // vi tri hien tai cua bai hat
  const [loopSong, setLoopSong] = useState(false); // lap lai bai hat
  const [input, setInput] = useState("");
  const [delay, setDelay] = useState("");
  const focusRef = useRef();

  useEffect(() => {
    setPlay(true);
    setIndexSong(0);
  }, [input]);

  useEffect(() => {
    focusRef.current.focus();
  });

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
    setIndexSong(indexSong === 0 ? indexSong + 1 : 0);
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
    }, 300);
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
  }, [loopSong, indexSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      noRef.current.play();
    } else {
      noRef.current.pause();
    }
  }, [play, indexSong, loopSong]);

  document.title = `${songs[indexSong].song}-${songs[indexSong].name}`;

  useEffect(() => {
    const delayInput = setTimeout(()=>{
      setDelay(input)
    },500)

    return ()=>clearTimeout(delayInput)
  }, [input]);

  let newsong = songs.filter((x) => {
    return (
      x.song.toUpperCase().includes(delay.toUpperCase()) ||
      x.name.toUpperCase().includes(delay.toUpperCase())
    );
  });

  
  return (
    <div className={cx(style.wrapper)}>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        style={{
          width: "100%",
          height: "50px",
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "100px",
          fontWeight: "700",
        }}
        ref={focusRef}
        placeholder="Search songs or artists"
      />

      <div className={cx(style.list)} style={{ height: "calc(100vh - 190px)" }}>
        {newsong.map((x, index) => {
          if (input.trim() === "") {
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
          } else if (
            x.song.toUpperCase().includes(delay.toUpperCase()) ||
            x.name.toUpperCase().includes(delay.toUpperCase())
          ) {
            let itemSong = x.song.toUpperCase().split(delay.toUpperCase());
            let itemName = x.name.toUpperCase().split(delay.toUpperCase());
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
                  <div
                    style={{
                      display: "flex",
                      overflow: "hidden",
                      maxHeight: "25px",
                    }}
                  >
                    {itemSong.map((y, i) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            fontSize: "25px",
                            fontWeight: "600",
                          }}
                          key={i}
                        >
                          <div>{y}</div>
                          {i !== itemSong.length - 1 && (
                            <div
                              style={{
                                backgroundColor: "var(--color-4)",
                                color: "var(--color-1)",
                              }}
                            >
                              {delay.toUpperCase()}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      overflow: "hidden",
                      maxHeight: "20px",
                    }}
                  >
                    {itemName.map((y, i) => {
                      return (
                        <div
                          style={{
                            display: "flex",
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                          key={i}
                        >
                          <div>{y}</div>
                          {i !== itemName.length - 1 && (
                            <div
                              style={{
                                backgroundColor: "var(--color-4)",
                                color: "var(--color-1)",
                              }}
                            >
                              {delay.toUpperCase()}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {newsong[indexSong] === undefined ? (
        <audio ref={noRef} src={Song28} />
      ) : (
        <audio ref={noRef} src={newsong[indexSong].src} />
      )}

      <div
        className={cx(style.durationBar)}
        ref={RefWidth}
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

export default Search;
