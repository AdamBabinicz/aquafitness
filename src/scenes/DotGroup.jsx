import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <button
        href="#start"
        aria-label="Przejdź do sekcji start"
        className={`${
          selectedPage === "start" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => {
          setSelectedPage("start");
          handleScrollToSection("start");
        }}
      />

      <button
        href="#cele"
        aria-label="Przejdź do sekcji cele"
        className={`${
          selectedPage === "cele" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => {
          setSelectedPage("cele");
          handleScrollToSection("cele");
        }}
      />

      <button
        href="#foto-teka"
        aria-label="Przejdź do sekcji foto-teka"
        className={`${
          selectedPage === "foto-teka" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => {
          setSelectedPage("foto-teka");
          handleScrollToSection("foto-teka");
        }}
      />

      <button
        href="#uczestnicy"
        aria-label="Przejdź do sekcji uczestnicy"
        className={`${
          selectedPage === "uczestnicy" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => {
          setSelectedPage("uczestnicy");
          handleScrollToSection("uczestnicy");
        }}
      />

      <button
        href="#kontakt"
        aria-label="Przejdź do sekcji kontakt"
        className={`${
          selectedPage === "kontakt" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => {
          setSelectedPage("kontakt");
          handleScrollToSection("kontakt");
        }}
      />
    </div>
  );
};

export default DotGroup;
