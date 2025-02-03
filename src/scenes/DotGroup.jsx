import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <a
        href="#start"
        aria-label="Przejdź do sekcji start"
        className={`${
          selectedPage === "start" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("start")}
      />

      <a
        href="#cele"
        aria-label="Przejdź do sekcji cele"
        className={`${
          selectedPage === "cele" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("cele")}
      />

      <a
        href="#foto-teka"
        aria-label="Przejdź do sekcji foto-teka"
        className={`${
          selectedPage === "foto-teka" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("foto-teka")}
      />

      <a
        href="#uczestnicy"
        aria-label="Przejdź do sekcji uczestnicy"
        className={`${
          selectedPage === "uczestnicy" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("uczestnicy")}
      />

      <a
        href="#kontakt"
        aria-label="Przejdź do sekcji kontakt"
        className={`${
          selectedPage === "kontakt" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("kontakt")}
      />
    </div>
  );
};

export default DotGroup;
