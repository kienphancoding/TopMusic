import Home from "../pages/Home";
import Static from "../pages/Static"
import Artists from "../pages/Artists";
import Search from "../pages/Search";
import NoMatch from "../pages/NoMatch";
import Trending from "../pages/Trending";

import { songsSidebars } from "./Artists";
import { trendingSidebars } from "./Trending";

let routes = [
  { path: "/", component: Home },
  {path:"/static",component:Static},
  { path: "/search", component: Search },
  { path: "/trending", component: Trending },

  { path: "*", component: NoMatch, layout: null },
];

const routesArtists = songsSidebars.map((x) => {
  return {
    path: x.path,
    component: Artists,
  };
});

const trending = trendingSidebars.map((x) => {
  return {
    path: x.path,
    component: Trending,
  };
});

routes = [...routes, ...routesArtists,...trending];

export { routes };
