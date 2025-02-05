import { useState } from "react";
import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Zatrzymanie domyślnej akcji formularza, ponieważ używamy mailto

    // Przesyłanie danych formularza przez mailto
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent("Wiadomość z formularza kontaktowego");
    const body = encodeURIComponent(`
      Imię i Nazwisko: ${name}
      Email: ${email}
      Wiadomość: ${message}
    `);
    const mailToLink = `mailto:puaro@vp.pl?subject=${subject}&body=${body}`;

    window.location.href = mailToLink; // Otwarcie klienta pocztowego

    // Można dodać komunikat o próbie wysyłki
    setSubmitStatus("Twoja wiadomość jest gotowa do wysłania.");
  };

  return (
    <section
      id="kontakt"
      className="contact mt-0 pt-8 pb-8 sm:pb-12 sm:mt-32 sm:pt-8 "
    >
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-center sm:justify-end w-full"
      >
        <div>
          <h2 className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">Kontakt</span> z nami
          </h2>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-[100%]" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="assets/ewa2.avif" alt="trenerka" loading="lazy" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form onSubmit={handleSubmit}>
            <motion.input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3"
              type="text"
              name="name"
              placeholder="Imię i nazwisko"
              required
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="email"
              name="email"
              placeholder="EMAIL"
              required
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />

            <motion.textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="Wiadomość"
              rows="4"
              cols="50"
              required
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            <motion.button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Wyślij wiadomość
            </motion.button>
          </form>

          {submitStatus && (
            <motion.p
              className="mt-3 text-green"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {submitStatus}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
