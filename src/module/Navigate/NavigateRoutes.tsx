import {Outlet, Route, Routes} from "react-router-dom";
import {Main} from "../../Pages/Main";
import {Dogs} from "../../Pages/Dogs";
import {About} from "../../Pages/About";

export const NavigateRoutes = () => {
  return (
    <Routes>
      <Route path='/DogSite' element={<Outlet/>}>
        <Route index element={<Main/>}/>
        <Route path='/DogSite/dogs' element={<Dogs/>}/>
        <Route path='/DogSite/about' element={<About/>}/>
      </Route>
    </Routes>
  )
}