import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/auth/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUser(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        navigate("/");
      }
    };
    fetchUser();
  }, [navigate]); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold">Welcome, {user?.username || "User"}</h1>
      <p className="text-gray-500">{user?.email}</p>
      <button onClick={handleLogout} className="mt-4 btn bg-red-500 hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}
