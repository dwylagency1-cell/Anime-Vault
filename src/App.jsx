import { Route, Routes } from "react-router-dom"
import Browse from "./componets/BrowsingPage"
import Social from "./componets/social"
import NotFound from "./componets/Notfoung"
import megumi from './componets/img/megumi.png'
import dead_gojo from './componets/img/deadgojo.png'
import yuta from './componets/img/yuta.png'
import chainsaw_man from './componets/img/chainsawman.png'

function App(){
  const wallpapers = [
    {
        id: 1,
        title: "Megumi Fushiguro",
        anime: "Jujutsu Kaisen",
        category: "Character",
        image: megumi,
        resolution: "1920x1080"
    },
    {
        id: 2,
        title: "Gojo Satoru",
        anime: "Jujutsu Kaisen",
        category: "Character",
        image: dead_gojo,
        resolution: "1920x1080"
    },
    {
      id: 3,
      title: "yuta",
      anime: "Jujutsu Kaisen",
      category: "Character",
      image: yuta,
      resolution: "1920x1080"
    },
    {
      id: 3,
      title: "Dengi",
      anime: "Chainsaw man",
      category: "Character",
      image: chainsaw_man,
      resolution: "1920x1080"
    }
];
  return (
  <Routes>
    <Route path="/" element={<Browse wallpapers={wallpapers}></Browse>}></Route>
    <Route path="/social" element={<Social></Social>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
  </Routes>
  )
}
export default App