import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import Static from "../pages/Static"
import AlanWalker from "../pages/AlanWalker"

import HeaderOnly from "../layouts/HeaderOnly"

const routes = [
    {path:"/",component:Home},
    {path:"/favorites",component:Favorites},
    {path:"/statics",component:Static,layout:HeaderOnly},
    {path:"/AlanWalker",component:AlanWalker},
    {path:"*",component:AlanWalker,layout:null},
   
]

export {routes}