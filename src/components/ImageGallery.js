import { Tab } from "@headlessui/react";
import { classNames } from "../utils/utils";
import { useState } from "react";

/*
const ImageGallery = ({ images }) => (
  <div className="sm:px-6 sm:pt-5 lg:px-8">
    <Tab.Group as="div" className="flex flex-col-reverse">
      
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image, ndx) => (
            <Tab
              key={ndx}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

     
      <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image, ndx) => (
          <Tab.Panel key={ndx}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  </div>
);
*/

const ImageGallery2 = ({ images }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="sm:px-6 sm:pt-5 lg:px-8">
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
                  onClick={() => console.log("CLUCKIN")}
                  src={image.src}
                  className="h-full w-full object-cover object-center"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Displayed Image */}
        <div
          className="aspect-h-1 aspect-w-1 w-full"
          onClick={() => console.log("FUCKIN WORKKK")}
        >
          <img
            src={images[selectedTab].src}
            alt={images[selectedTab].alt}
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery2;
