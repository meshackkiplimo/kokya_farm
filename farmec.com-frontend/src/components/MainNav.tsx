import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";


const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-4 items-center ">
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
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;