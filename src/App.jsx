import { Route, Routes } from "react-router-dom"
import Browse from "./componets/BrowsingPage"
import Social from "./componets/social"
import NotFound from "./componets/Notfoung"
import wallpapers from "./componets/data_structure"
import Preview from "./componets/preview.jsx";
import Favourites from "./componets/Favourites.jsx"


function App(){

  return (
  <Routes>
    <Route path="/" element={<Browse wallpapers={wallpapers}></Browse>}></Route>
    <Route path="/social" element={<Social></Social>}></Route>
    <Route path="/preview/:id" element={<Preview />}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    <Route path="/favourites" element={<Favourites></Favourites>}></Route>
  </Routes>
  )
}
export default App