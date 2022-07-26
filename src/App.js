import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from './pages/home/Home';
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={user ? <Home/> : <Register/>}/>
          <Route exact path="/login" element={user ? <Home/> :<Login/>}/>
          <Route exact path="/write" element={user ? <Write/> :<Register/>}/>
          <Route exact path="/settings" element={user ? <Settings/> : <Register/>}/>
          <Route exact path="/post/:postid" element={<Single/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
