import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, id, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();
  // const projectNumber = title.split(" ")[1];
  const projectNumber = title.match(/\d+/) ? title.match(/\d+/)[0] : "1";

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
      </div>
      <img
        src={`../assets/images/${id}.jpg`}
        alt={`Project ${projectNumber}`}
        className="w-full h-[300px] object-cover"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="foto-teka"
      className="h-full pt-4 sm:py-12 pb-8 sm:pb-12 mt-12 sm:mt-32"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">Foto</span> teka
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-[30%]" />
          </div>
        </div>
        <p className="mt-10 mb-10 text-2xl">
          Człowiek zdrowy to ten, który zna wartość zdrowia.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-deepBlue w-full
               max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Zajęcia z&nbsp;naszymi instruktorkami
          </div>
          <Project title="Orka" id={1} desc="Zajęcia z P. xxx" />
          <Project title="Delfin" id={2} desc="Zajęcia z P. Ewą" />

          {/* ROW 2 */}
          <Project title="Delfin" id={3} desc="Zajęcia z P. Ewą" />
          <Project title="Delfin" id={4} desc="Zajęcia z P. Mariolą" />
          <Project title="Orka" id={5} desc="Zajęcia z P. Ewą" />

          {/* ROW 3 */}
          <Project title="Orka" id={6} desc="Zajęcia z P. Ewą" />
          <Project title="Orka" id={7} desc="Zajęcia z P. xxx" />

          {/* ROW 4 */}
          <Project title="Orka" id={8} desc="Zajęcia z P. xxx" />
          <Project title="Orka" id={9} desc="Zajęcia z P. xxx" />
          <Project title="Delfin" id={10} desc="Zajęcia z P. Ewą" />
          {/* ROW 5 */}
          <Project title="Delfin" id={11} desc="Zajęcia z P. Mariolą" />
          <Project title="Neptun" id={12} desc="Zajęcia z P. xxx" />
          <Project title="Delfin" id={13} desc="Zajęcia z P. Mariolą" />
          {/* ROW 6 */}
          <Project title="Neptun" id={14} desc="Zajęcia z P. xxx" />
          <Project title="Neptun" id={15} desc="Zajęcia z P. xxx" />
          <Project title="Neptun" id={16} desc="Zajęcia z P. xxx" />
          <div
            className="flex justify-center text-center items-center p-10 bg-deepBlue w-full
               max-h-[400px] text-2xl font-playfair font-semibold"
          >
            Jeśli masz zdrowie, masz wszystko.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
