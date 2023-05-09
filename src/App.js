import "./App.css";
import Main from "./Main";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practise from "./Practise";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/prac" element={<Practise />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
