import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className=" py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <Link to="/" className="text-3xl font-bold tracking-tight text-green-500 hover:text-yellow-700">
            Farmech
          </Link>
         
        </div>
        
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}

export default Header;
