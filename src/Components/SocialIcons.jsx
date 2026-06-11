import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";
import './SocialIcons.css';

function SocialIcons({color}) {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank">
        <FaFacebookF color={color} />
      </a>

      <a href="https://instagram.com" target="_blank">
        <FaInstagram color={color}/>
      </a>

      <a href="https://twitter.com" target="_blank">
        <FaTwitter color={color}/>
      </a>

      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin color={color}/>
      </a>

      <a href="https://pinterest.com" target="_blank">
        <FaPinterest color={color} />
        </a>
    </div>
  );
}

export default SocialIcons;