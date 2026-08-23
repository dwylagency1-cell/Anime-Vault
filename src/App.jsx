import { Route, Routes } from "react-router-dom"
import Browse from "./componets/BrowsingPage"
import Social from "./componets/social"
import NotFound from "./componets/Notfoung"
function App(){
  return (
  <Routes>
    <Route path="/" element={<Browse></Browse>}></Route>
    <Route path="/social" element={<Social></Social>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
  </Routes>
  )
}
export default App