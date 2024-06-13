//import { Tab } from "@headlessui/react";
import { classNames } from "../utils/utils";
import { useState, useEffect } from "react";

const useKeyDown = (callback, keys) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      const wasAnyKeyPressed = keys.some((key) => event.key === key);
      if (wasAnyKeyPressed) {
        event.preventDefault();
        callback();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
};

// Example usage:

const ImageGallery2 = ({ images }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  /*useKeyDown(() => {
    setSelectedTab(selectedTab - 1 < 0 ? images.length - 1 : selectedTab - 1);
  }, ["ArrowLeft"]);
*/
  /*
  useKeyDown(() => {
    setSelectedTab((selectedTab + 1) % images.length);
  }, ["ArrowRight", "Tab"]);
*/
  return (
    <div className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images.map((image, ndx) => (
            <span
              key={ndx}
              className={classNames(
                "overflow-hidden rounded-md",
                selectedTab === ndx ? "ring-indigo-500" : "ring-transparent",
                "ring-2 ring-offset-2"
              )}
              onClick={() => setSelectedTab(ndx)}
            >
              <img
                src={image.src}
                className="h-full w-full object-cover object-center"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Displayed Image */}
      <div className="aspect-h-1 aspect-w-1 w-full">
        <img
          src={images[selectedTab].src}
          alt={images[selectedTab].alt}
          className="h-full w-full object-cover object-center sm:rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery2;
