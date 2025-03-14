import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  console.log("Komponent MySkills się renderuje!");
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="cele" className="pt-0 pb-2">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-12 sm:mt-12 md:mt-24 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="font-playfair font-semibold text-4xl mb-5 text-center sm:text-start">
            Nasze <span className="text-red">cele</span>
          </h2>
          <LineGradient width="w-[41%] mx-auto w-[50%] md:ml-0" />
          <p className="mt-10 mb-7">
            Ćwiczenia w wodzie mają na celu poprawę kondycji, wzmacnianie mięśni
            oraz zwiększenie elastyczności ciała, jednocześnie minimalizując
            obciążenie stawów. Dzięki oporowi wody pomagają również w spalaniu
            kalorii i&nbsp;poprawie koordynacji ruchowej. <br />
            <br />
            To nie tylko sposób na poprawę kondycji, ale także doskonała okazja
            do nawiązywania i&nbsp;utrzymywania kontaktów społecznych. Wspólne
            treningi sprzyjają integracji, budują poczucie wspólnoty
            i&nbsp;motywują do regularnej aktywności. Dzięki temu uczestnicy
            mogą czerpać radość nie tylko z&nbsp;ruchu, ale i&nbsp;z towarzystwa
            innych osób.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 w-full h-[500px] object-cover"
                src="assets/6.webp"
                loading="lazy"
              />
            </div>
          ) : (
            <img
              alt="skills"
              className="z-10 w-full h-[500px] object-cover"
              src="assets/fotka1.jpg"
              loading="lazy"
            />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Usunięcie once: true
          transition={{ duration: 0.5, delay: Math.random() * 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">1</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Ochrona stawów i&nbsp;kręgosłupa
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Ćwiczenia w&nbsp;wodzie zmniejszają obciążenie stawów, co czyni je
            idealnym rozwiązaniem dla osób z&nbsp;problemami ortopedycznymi
            i&nbsp;seniorów.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Usunięcie once: true
          transition={{ duration: 0.5, delay: Math.random() * 2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">2</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Efektywne spalanie kalorii
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-deepBlue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Dzięki oporowi wody trening angażuje więcej mięśni, co przyspiesza
            spalanie kalorii i&nbsp;wspomaga utratę wagi.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }} // Usunięcie once: true
          transition={{ duration: 0.5, delay: Math.random() * 2.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">3</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Poprawa kondycji i&nbsp;koordynacji
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Aqua fitness wzmacnia mięśnie, poprawia wydolność sercowo-naczyniową
            i&nbsp;zwiększa koordynację ruchową, co przekłada się na lepszą
            sprawność w&nbsp;codziennym życiu.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
