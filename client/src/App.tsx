import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LogInScreen from "./screens/LogInScreen";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/HomeScreen";
import FocusScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
       <Route path="/register" element = {<RegisterScreen/>}/>
       <Route path="/login" element = {<LogInScreen/>}/>
       <Route path="/" element = {<HomeScreen/>}/>
       <Route path="/list" element = {<ListScreen />}/>
       <Route path="/focus" element = {<FocusScreen />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App