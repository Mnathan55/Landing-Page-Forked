import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGlobe,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Column 1: Logo + Social */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Dafil Tech</h1>
          <div className="flex space-x-4 text-xl mb-4">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaGlobe />
            <FaXTwitter />
          </div>
          <p className="text-sm">
            © dafiltech.
            <br />
            All rights reserved 2025
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h2 className="font-semibold text-lg mb-4 text-gray-900">Services</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Blockchain Development
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              AI Development Services
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Game Development
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Crypto Exchange Development
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Web3 Development
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              Web Design & Development
            </li>
            <li className="hover:text-black hover:translate-x-1 transition-all duration-200 cursor-pointer">
              iOS & Android App Development
            </li>
          </ul>
        </div>

        {/* Column 3: About */}
        <div>
          <h2 className="font-semibold text-lg mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Team</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Work</li>
            <li>Clients</li>
            <li>Knowledge</li>
            <li>Reach Us</li>
          </ul>
        </div>

        {/* Column 5: Quick Links */}
        <div>
          <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>Site Map</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
