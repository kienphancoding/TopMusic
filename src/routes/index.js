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
    
    // { path: "/Maroon5", component: Maroon5},
    // { path: "/ImagineDragons", component: ImagineDragons},
    // { path: "/CharliePuth", component: CharliePuth},
    // { path: "/EdSheeran", component: EdSheeran},
    // { path: "/BrunoMars", component: BrunoMars ,},
    // { path: "/DuaLipa", component: DuaLipa ,},
    // { path: "/Eminem", component: Eminem ,},
    // { path: "/TaylorSwift", component: TaylorSwift ,},
    // { path: "/JustinBeiber", component: JustinBeiber ,},
    // { path: "/Rihanna", component: Rihanna ,},
    // { path: "/DjSnake", component: DjSnake ,},
    // { path: "/ShawnMendes", component: ShawnMendes ,},
    // { path: "/Avicii", component: Avicii ,},
    // { path: "/Coldplay", component: Coldplay ,},
    // { path: "/ArianaGrande", component: ArianaGrande ,},
    // { path: "/CalvinHarris", component: CalvinHarris ,},
    
    {path:"*",component:NoMatch,layout:null},
]

export {routes}