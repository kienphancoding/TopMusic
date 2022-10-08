import Home from "../pages/Home"
// import Static from "../pages/Static"
import AlanWalker from "../pages/AlanWalker"
import BlackPink from "../pages/BlackPink"
import THECHAINSMOKERS from "../pages/TheChainsmokers"
import MartinGarrix from "../pages/MartinGarrix"

// import HeaderOnly from "../layouts/HeaderOnly"
import NoMatch from "../pages/NoMatch"

const routes = [
    {path:"/",component:Home},
    // {path:"/statics",component:Static,layout:HeaderOnly},
    {path:"/AlanWalker",component:AlanWalker},
    {path:"/BlackPink",component:BlackPink},
    {path:"/TheChainsmokers",component:THECHAINSMOKERS},
    {path:"/MartinGarrix",component:MartinGarrix},
    {path:"*",component:NoMatch,layout:null},
   
]

export {routes}