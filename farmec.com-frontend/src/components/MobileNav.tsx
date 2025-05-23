import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import MobileNavLinks from "./MobileNavLinks";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/AuthContext";

const MobileNav = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-500" />
      </SheetTrigger>

      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-green-500" />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to Farmec.com</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => navigate('/login')}
              className="flex-1 font-bold bg-green-500"
            >
              Log in
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;