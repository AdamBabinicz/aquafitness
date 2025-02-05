import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-60 bg-deepBlue pt-6">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <h3 className="font-playfair font-semibold text-2xl text-yellow">
            Aqua Fitness 55+
          </h3>
          <h4 className="font-playfair text-md text-yellow">
            Radom 2025 - {new Date().getFullYear()}.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
