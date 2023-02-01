import {Route, Routes} from "react-router-dom";
import {Main} from "../../Pages/Main";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/dog' element={<div>dsfa</div>}/>
    </Routes>
  )
}