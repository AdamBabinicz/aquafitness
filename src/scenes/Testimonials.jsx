import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section
      id="uczestnicy"
      className="min-h-auto md:min-h-screen pt-8 sm:py-12"
    >
      {/* HEADING */}
      <motion.div
        className="text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Uczestnicy
        </p>
        <LineGradient width="mx-auto w-[50%] md:w-[14%] md:ml-0" />
        <p className="mt-10 text-xl sm:text-2xl">
          Zdrowie jest najważniejszym darem, a&nbsp;radość z&nbsp;życia pochodzi
          z&nbsp;harmonii ciała i&nbsp;umysłu.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:grid md:grid-cols-4 md:gap-4 grid-cols-1">
        <motion.div
          className="mx-auto relative bg-deepBlue w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
             before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Katarzyna</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-shadow-lg">“</p>
          <p className="text-center text-xl text-shadow-lg">Janusz</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-deepBlue w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">---</p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-yellow w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-shadow-lg">“</p>
          <p className="text-center text-xl text-shadow-lg">Adam</p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-deepBlue w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Tadeusz</p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-yellow w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-shadow-lg">“</p>
          <p className="text-center text-xl text-shadow-lg">Barbara</p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-deepBlue w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">Elżbieta</p>
        </motion.div>
        <motion.div
          className="mx-auto relative bg-yellow w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-shadow-lg">“</p>
          <p className="text-center text-xl text-shadow-lg">Halina</p>
        </motion.div>
        {/* <motion.div
          className="mx-auto relative bg-red w-[300px] h-[170px] flex flex-col justify-between p-16 mt-36
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl text-shadow-lg">“</p>
          <p className="text-center text-xl text-shadow-lg">---</p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;
