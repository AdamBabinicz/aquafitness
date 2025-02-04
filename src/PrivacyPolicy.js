import React from "react";
import { IoClose } from "react-icons/io5"; // Ikona zamknięcia

function PrivacyPolicy({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 mx-auto shadow-md rounded-md relative max-w-[95vw] sm:max-w-[60vw] max-h-[90vh] overflow-y-auto">
        {/* Przycisk zamknięcia */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <IoClose size={30} />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Polityka Prywatności
        </h2>
        <p className="text-gray-700 mb-4">
          Szanujemy Twoją prywatność i przykładamy dużą wagę do ochrony Twoich
          danych osobowych. Nasza Polityka Prywatności opisuje, jakie informacje
          zbieramy, w jaki sposób je wykorzystujemy, komu możemy je udostępniać
          oraz jakie masz prawa w związku z przetwarzaniem Twoich danych.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          1. Jakie dane zbieramy?
        </h3>
        <p className="text-gray-700 mb-4">
          Zbieramy tylko te dane, które są niezbędne do realizacji naszych
          usług, takie jak dane kontaktowe, dane związane z formularzami czy
          dane dotyczące korzystania z naszej strony internetowej.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          2. Jak wykorzystujemy Twoje dane?
        </h3>
        <p className="text-gray-700 mb-4">
          Twoje dane osobowe są wykorzystywane w celu realizacji usług, obsługi
          klienta, personalizacji treści, komunikacji oraz zapewnienia zgodności
          z obowiązującymi przepisami prawa.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          3. Komu możemy udostępniać Twoje dane?
        </h3>
        <p className="text-gray-700 mb-4">
          Twoje dane mogą być udostępniane naszym partnerom, dostawcom usług
          oraz innym stronom trzecim, jeżeli jest to konieczne do realizacji
          naszych zobowiązań.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          4. Twoje prawa
        </h3>
        <p className="text-gray-700 mb-4">
          Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia, a
          także prawo do wycofania zgody na ich przetwarzanie. Możesz także
          zgłosić sprzeciw wobec przetwarzania danych.
        </p>
        <a
          href="/"
          className="text-deepBlue hover:text-dark-grey mt-4 inline-block text-lg transition-colors duration-300 ease-in-out"
        >
          Powrót do strony głównej
        </a>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
