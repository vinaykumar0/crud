import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Add from "./components/Add";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/add' element={<Add/>}/>
     </Routes>
    </>
  );
}
