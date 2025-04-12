import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./menu";
import Home from "./home";

function App() {
   return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      </Routes>
    
    </BrowserRouter>
    
    
  );
}

export default App;
