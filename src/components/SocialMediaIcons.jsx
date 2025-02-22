import { FaLinkedin, FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Odwiedź mnie w Linkedin (otworzy się w nowym oknie)"
      >
        <FaLinkedin size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/home?lang=pl&mx=2"
        target="_blank"
        rel="noreferrer"
        aria-label="Odwiedź mnie na Twitter (otworzy się w nowym oknie)"
      >
        <FaTwitter size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/adam.gierczak.334"
        target="_blank"
        rel="noreferrer"
        aria-label="Odwiedź mnie na Facebooku (otworzy się w nowym oknie)"
      >
        <FaFacebook size={30} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.pinterest.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Odwiedź mnie na Pinterest (otworzy się w nowym oknie)"
      >
        <FaPinterest size={30} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
