import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-xl text-white font-bold">Contact Us</h2>
            <p className="text-gray-400 mt-2">Bangalore, India</p>
            <p className="text-gray-400">Sheshh@example.com</p>
            <p className="text-gray-400">Sombody call the 911</p>
          </div>
          <div className="text-center md:text-right">
            <h2 className="text-xl text-white font-bold">Follow Us</h2>
            <div className="flex justify-center md:justify-end mt-4">
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
