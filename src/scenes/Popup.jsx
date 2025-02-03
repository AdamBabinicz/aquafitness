import { FaTimes } from "react-icons/fa"; // Import

const Popup = ({ closePopup }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3 relative h-[500px] sm:h-[610px]">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-red-500"
        >
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          Na basenie "Orka"
        </h2>
        <p className="mb-4 text-gray-700">
          W grupach przeważają kobiety, mężczyźni są jak na lekarstwo.
        </p>
        <img src="assets/12.avif" alt="Popup Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Popup;
