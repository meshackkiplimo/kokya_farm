import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Farmech.com</h3>
            <p className="text-sm text-white/80">
              Your trusted partner in farm machinery rentals. Making modern farming accessible and efficient for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/rent" className="hover:text-white/80">Explore</Link></li>
              <li><Link to="/services" className="hover:text-white/80">Services</Link></li>
              <li><Link to="/about" className="hover:text-white/80">About Us</Link></li>
              <li><Link to="/book" className="hover:text-white/80">Rent Now</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@farmech.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Twitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} Farmech.com. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white/80">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;