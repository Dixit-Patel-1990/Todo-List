import { BrowserRouter, Route, Routes } from "react-router-dom";
import GetRandomCityData from "./todo-list/getRandomCityData/GetRandomCityData";
import Main from "./todo-list/main/Main";
import "./App.css"
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Main />}></Route>
          <Route path="/GetRandomCityData" element={<GetRandomCityData/>}/>
        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
