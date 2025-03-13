import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    // Początkowe ustawienie wartości
    setMatches(media.matches);

    // Dodanie nasłuchiwania na zmianę rozmiaru okna
    window.addEventListener("resize", listener);

    // Usunięcie nasłuchiwania po odmontowaniu komponentu
    return () => window.removeEventListener("resize", listener);
  }, [query]); // Usunięcie 'matches' z tablicy zależności

  return matches;
};

export default useMediaQuery;
