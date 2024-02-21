import logo from "./logo.svg";
import "./App.css";
import Code from "./Code";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Display from "./Display";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Code />} />
          <Route path="/display/:id" element={<Display />} />
          
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
