import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="hover:text-gray-300 text-xl font-bold">
            TRAINING
          </Link>
        </div>

        <button className="md:hidden block" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="/karyawan"
              className={`text-sm hover:text-gray-800 hover:bg-green-300 p-2 rounded-md ${
                isActive("/karyawan") ? "bg-green-500" : ""
              }`}
            >
              Karyawan
            </Link>
          </li>
          <li>
            <Link
              to="/karyawan-training"
              className={`text-sm hover:text-gray-800 hover:bg-green-300 p-2 rounded-md ${
                isActive("/karyawan-training") ? "bg-green-500" : ""
              }`}
            >
              Karyawan Training
            </Link>
          </li>
          <li>
            <Link
              to="/menu-training"
              className={`text-sm hover:text-gray-800 hover:bg-green-300 p-2 rounded-md ${
                isActive("/menu-training") ? "bg-green-500" : ""
              }`}
            >
              Menu Training
            </Link>
          </li>
          <li>
            <Link
              to="/rekening"
              className={`text-sm hover:text-gray-800 hover:bg-green-300 p-2 rounded-md ${
                isActive("/rekening") ? "bg-green-500" : ""
              }`}
            >
              Rekening
            </Link>
          </li>
        </ul>

        <button
          className="hidden md:flex items-center space-x-2 text-red-500"
          onClick={handleLogout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <ul className="md:hidden bg-gray-700 text-white p-4 space-y-2 mt-2 rounded-lg">
          <li>
            <Link
              to="/karyawan"
              className={`text-sm block hover:text-gray-300 p-2 rounded-md ${
                isActive("/karyawan") ? "bg-green-500" : ""
              }`}
            >
              Karyawan
            </Link>
          </li>
          <li>
            <Link
              to="/karyawan-training"
              className={`text-sm block hover:text-gray-300 p-2 rounded-md ${
                isActive("/karyawan-training") ? "bg-green-500" : ""
              }`}
            >
              Karyawan Training
            </Link>
          </li>
          <li>
            <Link
              to="/menu-training"
              className={`text-sm block hover:text-gray-300 p-2 rounded-md ${
                isActive("/menu-training") ? "bg-green-500" : ""
              }`}
            >
              Menu Training
            </Link>
          </li>
          <li>
            <Link
              to="/rekening"
              className={`text-sm block hover:text-gray-300 p-2 rounded-md ${
                isActive("/rekening") ? "bg-green-500" : ""
              }`}
            >
              Rekening
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-sm block w-full text-left text-red-500 p-2 font-bold"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
