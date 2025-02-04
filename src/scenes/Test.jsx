import { useState, useEffect } from "react";

const Test = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log("scrollY:", scrollY);

      if (scrollY > 50) {
        console.log("Changing navbarBg to true");
        setNavbarBg(true);
      } else {
        console.log("Changing navbarBg to false");
        setNavbarBg(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        style={{
          backgroundColor: navbarBg ? "red" : "transparent",
          transition: "background-color 0.3s ease", // Dodanie płynnego przejścia
        }}
      >
        Navbar
      </nav>
      <div style={{ height: "2000px" }}>Content</div>
    </div>
  );
};

export default Test;
