import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

const MainNav = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <span className="flex space-x-4 items-center">
      {isAuthenticated ? (
        <>
          <Link to="/rent" className="font-bold hover:text-green-500">
            Explore
          </Link>
          <Link to="/services" className="font-bold hover:text-green-500">
            Services
          </Link>
          <Link to="/about" className="font-bold hover:text-green-500">
            About Us
          </Link>
          <Link to="/order-status" className="font-bold hover:text-green-500">
            Order Status
          </Link>
          <Link to="/book" className="font-bold hover:text-green-500">
            Rent
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-green-500 hover:bg-white"
          onClick={() => navigate('/login')}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;