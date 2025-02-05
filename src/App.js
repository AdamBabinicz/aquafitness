import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";
import CookieConsent from "react-cookie-consent";
import PrivacyPolicy from "./PrivacyPolicy";

function App() {
  const [selectedPage, setSelectedPage] = useState("start");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleOpenPrivacyPolicy = (e) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  const handleClosePrivacyPolicy = () => {
    setShowPrivacyModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("start");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("start")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("cele")}
        >
          <MySkills />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("foto-teka")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("uczestnicy")}
        >
          <Testimonials />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("kontakt")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
      {showPrivacyModal && <PrivacyPolicy onClose={handleClosePrivacyPolicy} />}
      <CookieConsent
        location="bottom"
        buttonText="Zgadzam się"
        declineButtonText="Nie zgadzam się"
        cookieName="myCookieConsent"
        declineAriaLabel="Nie zgadzam się na pliki cookies" // to jest poprawne
      >
        Nasza strona używa plików cookies w&nbsp;celu zapewnienia lepszej
        funkcjonalności, personalizacji treści oraz analizy ruchu na stronie.
        Dzięki plikom cookies możemy dostosować stronę do Twoich potrzeb
        i&nbsp;preferencji. Możesz dowiedzieć się więcej o&nbsp;wykorzystywanych
        plikach cookies oraz sposobach ich zarządzania w&nbsp;naszej&nbsp;
        <button
          onClick={handleOpenPrivacyPolicy}
          className="text-blue hover:text-dark-grey font-semibold underline mt-4 inline-block transition-colors duration-300 ease-in-out"
          aria-label="Przeczytaj Politykę Prywatności" // odpowiednia dostępna nazwa
        >
          Polityce Prywatności
        </button>
        .
      </CookieConsent>
    </div>
  );
}

export default App;
