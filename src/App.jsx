import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./menu";
import Home from "./home";
import Estudios from "./estudios";

function App() {
   return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/estudios" element={<Estudios></Estudios>} ></Route>
      </Routes>
    
    </BrowserRouter>
    
    
  );
}

export default App;
