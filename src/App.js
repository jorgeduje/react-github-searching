
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Followers from "./views/Followers/Followers";
import SingleUser from "./views/SingleUser/SingleUser";
import Following from "./views/Following/Following";
import Repo from "./views/Repos/Repo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/users/:name/followers" element={<Followers />}/>
        <Route path="/users/:name/following" element={<Following />}/>
        <Route path="/users/:name/repos" element={<Repo />}/>
        <Route path="/users/:userName" element={<SingleUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;