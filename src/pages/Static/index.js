import clsx from "clsx";
import style from "./Static.module.scss";
import { songsSidebars } from "../../routes/Artists";
import { useEffect } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Static = () => {

  //check and set init static
  useEffect(() => {
    if (
      localStorage.getItem("staticPlay") === null &&
      JSON.parse(localStorage.getItem("staticPlay").length !== songsSidebars.length)
    ) {
      let array = [];
      songsSidebars.map(() => {
        array.push(0);
      });
      localStorage.setItem("staticPlay", JSON.stringify(array));
      localStorage.setItem("staticDuration", JSON.stringify(array));
    }
  }, []);

  const data = songsSidebars.map((x,index)=>{
    return{
      name:x.name,
      play: JSON.parse(localStorage.getItem("staticPlay"))[index],
      duration: JSON.parse(localStorage.getItem("staticDuration"))[index],
      rate:Math.round(JSON.parse(localStorage.getItem("staticDuration"))[index]/JSON.parse(localStorage.getItem("staticPlay"))[index]) || 0
    }
  })


  return (
    <div className={clsx(style.wrapper)}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="duration" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="play" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="rate" stroke="#ff7300" />
          {/* <Scatter dataKey="rate" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Static;
