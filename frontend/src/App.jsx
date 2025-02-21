import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Authentication from "./pages/Authentication";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import MainHome from "./pages/Home";
import Profile from "./components/home/Profile";
import Notifications from "./components/home/Notifications";
import Messaging from "./components/home/Messaging";
import Community from "./components/home/Community";
import Projects from "./components/home/Projects";
import Forums from "./components/home/Forums";
import "./assets/scroller.css";

// Just Change
 
function App() {
  const navigate = useNavigate();

  // Load authentication state from localStorage
  const [isAuthentic, setIsAuthentic] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userId, setUserId] = useState(localStorage.getItem("userId")|| "");

  // Persist authentication on login
  const handleLogin = (token, id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", id);
    setIsAuthentic(true);
    setUserId(id);
    navigate("/home"); // Redirect after login
  };

  // useEffect(()=>{
  //   handleLogout()
  // },[])

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsAuthentic(false);
    setUserId("");
    navigate("/"); // Redirect to MainHome after logout
  };
 
  return (
    <>
      {
        isAuthentic ? <Header /> : <></>
      }
      <Routes>
        {isAuthentic ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/forums" element={<Forums userId={userId} />} />
            <Route path="/community" element={<Community />} />
            <Route path="/projects" element={<Projects userId={userId} />} />
            <Route path="/messages" element={<Messaging />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile userId={userId} handleLogout={handleLogout} />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        ) : (
          <>
            <Route path="/" element={<MainHome />} />
            <Route
              path="/login"
              element={<Authentication setIsAuthentic={setIsAuthentic} handleLogin={handleLogin} setUserId={setUserId} />}
            />
            <Route path="*" element={<MainHome />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
