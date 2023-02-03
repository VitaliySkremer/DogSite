import {Route, Routes} from "react-router-dom";
import {Main} from "../../Pages/Main";
import {Dogs} from "../../Pages/Dogs";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/dogs' element={<Dogs/>}/>
    </Routes>
  )
}