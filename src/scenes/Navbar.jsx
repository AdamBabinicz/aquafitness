import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import menuOpen from "../assets/menu-icon.svg";
import menuClose from "../assets/close-icon.svg";

const Link = ({ page, selectedPage, setSelectedPage, closeMenu }) => {
  const lowerCasePage = page.toLowerCase();
  const handleClick = () => {
    const section = document.getElementById(lowerCasePage);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setSelectedPage(lowerCasePage);
      closeMenu();
    }
  };
  return (
    <button
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500 cursor-pointer`}
      onClick={handleClick}
    >
      {page}
    </button>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Funkcja do zamykania menu
  const closeMenu = () => {
    setIsMenuToggled(false);
  };

  return (
    <nav className="bg-deepBlue z-40 w-full fixed top-0 py-6">
      <div className="flex items-center justify-between mx-auto w-5/6">
        <p className="font-playfair text-2xl sm:text-3xl font-bold">
          Tablo Aqua Fitness
        </p>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Start"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Cele"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Foto-teka"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Uczestnicy"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
            <Link
              page="Kontakt"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeMenu={closeMenu}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={menuOpen} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="menu-icon" src={menuClose} />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Start"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Cele"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Foto-teka"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Uczestnicy"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
              <Link
                page="Kontakt"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                closeMenu={closeMenu}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
