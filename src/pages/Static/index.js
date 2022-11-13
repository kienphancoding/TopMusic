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
} from "recharts";

const Static = () => {
  //check and set init static
  useEffect(() => {
    if (localStorage.getItem("staticPlay") === null) {
      let array = [];
      songsSidebars.map(() => {
        array.push(0);
      });
      localStorage.setItem("staticPlay", JSON.stringify(array));
      localStorage.setItem("staticDuration", JSON.stringify(array));
    }
  }, []);

  const dataDuration = songsSidebars.map((x, index) => {
    return {
      name: x.name,
      duration: JSON.parse(localStorage.getItem("staticDuration"))
        ? JSON.parse(localStorage.getItem("staticDuration"))[index]
        : 0,
    };
  });

  const dataPlay = songsSidebars.map((x, index) => {
    return {
      name: x.name,
      play: JSON.parse(localStorage.getItem("staticPlay"))
        ? JSON.parse(localStorage.getItem("staticPlay"))[index]
        : 0,
      duration: JSON.parse(localStorage.getItem("staticDuration"))
        ? JSON.parse(localStorage.getItem("staticDuration"))[index]
        : 0,
      rate: JSON.parse(localStorage.getItem("staticPlay"))
        ? Math.round(
            JSON.parse(localStorage.getItem("staticDuration"))[index] /
              JSON.parse(localStorage.getItem("staticPlay"))[index]
          ) || 0
        : 0,
    };
  });

  const dataRate = songsSidebars.map((x, index) => {
    return {
      name: x.name,
      play: JSON.parse(localStorage.getItem("staticPlay"))
        ? JSON.parse(localStorage.getItem("staticPlay"))[index]
        : 0,
      duration: JSON.parse(localStorage.getItem("staticDuration"))
        ? JSON.parse(localStorage.getItem("staticDuration"))[index]
        : 0,
      rate: JSON.parse(localStorage.getItem("staticPlay"))
        ? Math.round(
            JSON.parse(localStorage.getItem("staticDuration"))[index] /
              JSON.parse(localStorage.getItem("staticPlay"))[index]
          ) || 0
        : 0,
    };
  });

  return (
    <div className={clsx(style.wrapper)}>
      <ResponsiveContainer>
        <ComposedChart
          data={dataDuration}
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
          <Area
            type="monotone"
            dataKey="duration"
            fill="#8884d8"
            stroke="#8884d8"
          />
        </ComposedChart>
      </ResponsiveContainer>

      <ResponsiveContainer>
        <ComposedChart
          data={dataPlay}
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
          <Bar dataKey="play" barSize={20} fill="#413ea0" />
          {/* <Scatter dataKey="rate" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>

      <ResponsiveContainer>
        <ComposedChart
          data={dataRate}
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
          <Line type="monotone" dataKey="rate" stroke="#ff7300" />
          {/* <Scatter dataKey="rate" fill="red" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Static;
