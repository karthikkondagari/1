import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Componenets/About";
import Home from "./Componenets/Home";
import NoteState from "./Context/Notes/Notestate";
import Alert from "./Componenets/Alert";
import Login from "./Componenets/Login";
import Signup from "./Componenets/Signup";
import { useState } from "react";
import PageNoTFound from "./Componenets/PageNotFound";
import Profile from "./Componenets/Profie";

import NavigationBar from "./Componenets/Navbar";

function App() {
  const [alert, setAlert] = useState();

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <div>
      <>
        <NoteState>
          <BrowserRouter>
            <NavigationBar />
            <Alert alert={alert} />
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
              <Route path="*" element={<PageNoTFound />} />
            </Routes>
          </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
