import {AboutModule} from "../module/About/AboutModule";
import {MyOffice} from "../module/MyOficce/MyOffice";

export const About = () => {
  return (
    <div>
      <h3 className='title'>
        О нас
      </h3>
      <AboutModule/>
      <MyOffice/>
    </div>
  )
}