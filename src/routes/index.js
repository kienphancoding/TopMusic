import Home from "../pages/Home"
// import Static from "../pages/Static"
import AlanWalker from "../pages/AlanWalker"
import BlackPink from "../pages/BlackPink"
import TheChainsmokers from "../pages/TheChainsmokers"
import MartinGarrix from "../pages/MartinGarrix"
import Maroon5 from "../pages/Maroon5"

import ImagineDragons from "../pages/ImagineDragons"
import CharliePuth from "../pages/CharliePuth"
import EdSheeran from "../pages/EdSheeran"
import BrunoMars from "../pages/BrunoMars"
import DuaLipa from "../pages/DuaLipa"
import Eminem from "../pages/Eminem"
import TaylorSwift from "../pages/TaylorSwift"
import JustinBeiber from "../pages/JustinBeiber"
import Rihanna from "../pages/Rihanna"
import DjSnake from "../pages/DjSnake"
import ShawnMendes from "../pages/ShawnMendes"
import Avicii from "../pages/Avicii"
import Coldplay from "../pages/Coldplay"
import ArianaGrande from "../pages/ArianaGrande"
import CalvinHarris from "../pages/CalvinHarris"
import Zedd from "../pages/Zedd"
import Search from "../pages/Search"

// import HeaderOnly from "../layouts/HeaderOnly"
import NoMatch from "../pages/NoMatch"

import EDM from "../pages/EDM"
import Ballad from "../pages/Ballad"
import Viral from "../pages/Viral"
import Pop from "../pages/Pop"

const routes = [
    {path:"/",component:Home},
    // {path:"/statics",component:Static,layout:HeaderOnly},
    {path:"/AlanWalker",component:AlanWalker},
    {path:"/BlackPink",component:BlackPink},
    {path:"/TheChainsmokers",component:TheChainsmokers},
    {path:"/MartinGarrix",component:MartinGarrix},
    { path: "/Maroon5", component: Maroon5},
    { path: "/ImagineDragons", component: ImagineDragons},
    { path: "/CharliePuth", component: CharliePuth},
    { path: "/EdSheeran", component: EdSheeran},
    { path: "/BrunoMars", component: BrunoMars ,},
    { path: "/DuaLipa", component: DuaLipa ,},
    { path: "/Eminem", component: Eminem ,},
    { path: "/TaylorSwift", component: TaylorSwift ,},
    { path: "/JustinBeiber", component: JustinBeiber ,},
    { path: "/Rihanna", component: Rihanna ,},
    { path: "/DjSnake", component: DjSnake ,},
    { path: "/ShawnMendes", component: ShawnMendes ,},
    { path: "/Avicii", component: Avicii ,},
    { path: "/Coldplay", component: Coldplay ,},
    { path: "/ArianaGrande", component: ArianaGrande ,},
    { path: "/CalvinHarris", component: CalvinHarris ,},
    { path: "/Zedd", component: Zedd ,},
    { path: "/search", component: Search ,},

    {path:"/EDM",component:EDM},
    {path:"/Ballad",component:Ballad},
    {path:"/Viral",component:Viral},
    {path:"/Pop",component:Pop},

    
    {path:"*",component:NoMatch,layout:null},
]

export {routes}