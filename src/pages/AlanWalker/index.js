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

const AlanWalker = () => {
    const [play,setPlay] = useState(true) // true la hien nut play
    const [indexSong,setIndexSong] = useState(0) // vi tri hien tai cua bai hat
    const handlePlay = () =>{
        setPlay(false)
    }
    const handlePause = ()=>{
        setPlay(true)
    }
    const handleNextSong = ()=>{
        setIndexSong(indexSong===songs.length-1?0:indexSong+1)
    }

    const handlePrevSong = ()=>{
        setIndexSong(indexSong===0?songs.length-1:indexSong-1)
    }

  const playRef = useRef();


  useEffect(() => {
    if(play===false){

        playRef.current.play();
    }else{
        playRef.current.pause();

    }
  }, [play,indexSong]);
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.main)}>
        <img src={songs[indexSong].img} alt="img" />
        <div className={cx(style.intro)}>
        <h1>{songs[indexSong].name}</h1>
        <p>{songs[indexSong].name}</p></div>
      </div>
      <div className={cx(style.list)}>
        {songs.map((x, index) => {
          return (
            <div className={indexSong===index?cx(style.item,style.active):cx(style.item)} key={index} onClick={()=>setIndexSong(index)}>
              <img className={cx(style.img)} src={x.img} alt={x.name}/>
              <div className={cx(style.info)}>
              <h1>{x.name}</h1>
              <p>{x.name}</p>
              </div>
            </div>
          );
        })}
        
        <audio ref={playRef} src={songs[indexSong].src} />
      </div>
      <div className={cx(style.menu)}>
        <button>
          <FontAwesomeIcon className={cx(style.icon)} icon={faRotateRight} />
        </button>
        <button onClick={handlePrevSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faBackwardStep} />
        </button>
        {play &&<button onClick={handlePlay}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faPlay} />
        </button>}
        
        {!play&&<button onClick={handlePause}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faPause} />
        </button>}
        
        <button onClick={handleNextSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faForwardStep} />
        </button>
        <button>
          <FontAwesomeIcon className={cx(style.icon)} icon={faShuffle} />
        </button>
      </div>
    </div>
  );
};

export default AlanWalker;
