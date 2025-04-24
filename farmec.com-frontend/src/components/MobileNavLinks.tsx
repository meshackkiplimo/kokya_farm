import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/auth/AuthContext";

const MobileNavLinks = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Link
        to="/book"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        Rent
      </Link>
      <Link
        to="/rent"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        Explore
      </Link>
      <Link
        to="/services"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        Services
      </Link>
      <Link
        to="/about"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        About us
      </Link>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        Order Status
      </Link>
      <Link
        to="/manage-rent"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        Manage Rent
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-green-500"
      >
        User Profile
      </Link>
      <Button
        onClick={handleLogout}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;