import {Navigate} from "./module/Navigate/Navigate";
import {BrowserRouter} from "react-router-dom";
import {NavigateRoutes} from "./module/Navigate/NavigateRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigate/>
        <main className='main'>
          <div className='main_wrapper'>
            <NavigateRoutes/>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
