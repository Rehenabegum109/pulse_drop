
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../pages/auth/useAuth";


export default function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black text-white">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-black">
          P
        </div>

        <h1 className="text-xl font-bold">
          Pulse<span className="text-red-500">Drop</span>
        </h1>
      </div>

      {/* LINKS */}
      <div className="space-x-6 text-sm text-gray-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-red-500"
              : "hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/drops"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-red-500"
              : "hover:text-white"
          }
        >
          Drops
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-red-500"
              : "hover:text-white"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white border-b border-red-500"
              : "hover:text-white"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* AUTH */}
      <div className="flex items-center gap-3">
        {auth.user ? (
          <>
            <span className="text-sm text-gray-300">
              Hi,
              <span className="text-white font-semibold ml-1">
                {auth.user.name}
              </span>
            </span>

            <button
              onClick={handleLogout}
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/auth">
            <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}