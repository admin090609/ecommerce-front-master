import React from "react";
import { useState } from "react";
import Image from "next/image";

const product = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedColor, setSelectedColor] = useState<number | null>(null); // Adăugăm o stare pentru culoare

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  const images = [
    "/images/agenda2.png",
    "/images/agenda2.png", // Adaugă aici URL-urile imaginilor
  ];

  const colors = [
    "/images/agenda2.png", // Adaugă aici URL-urile imaginilor pentru culori
    "/images/agenda2.png",
  ];

  return (
    <>
      <h1 className="text-center font-bold text-5xl mb-10">
        Paper ball pen POLI
      </h1>
      <div className="flex mx-20 justify-center">
        <div>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt=""
              width={600}
              height={100}
              className={`border-2 rounded-lg mb-3 hover:border-black hover:bg-slate-50 cursor-pointer duration-300 ease-in-out ${
                selectedImage === index ? "border-black" : ""
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <div>
          <Image src="/images/agenda2.png" alt="" width={2000} height={100} />
        </div>
        <div>
          <div>
            <h1 className="text-3xl  font-semibold mb-4">
              {" "}
              <span className="mr-2  rounded-[50%] bg-black px-3 text-white">
                1
              </span>
              Alege modelul de pix
            </h1>
            <p className=" mb-10 text-gray-500">
              Pentru a afla costul, alegeți opțiunile care vă interesează.
              Costul preliminar este calculat în baza tirajului, termenului de
              producere și a modelului de pix.
            </p>
            <div>
              <h1 className="text-gray-500">Culoare</h1>
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`border-[1px] mr-3 p-2 hover:border-blue-500 hover:bg-slate-50  duration-150 ease-in-out rounded-lg mb-20 ${
                    selectedColor === index ? "border-blue-500" : ""
                  }`}
                  onClick={() => handleColorClick(index)}
                >
                  <Image src={color} alt="" width={100} height={100} />
                </button>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-4">
              {" "}
              <span className="mr-2 rounded-[50%] bg-black px-2.5  text-white">
                2
              </span>
              Alegeți cantitatea și termenul de producere
            </h1>
            <p className="text-gray-500 mb-10">
              În tabel veți găsi prețuri în funcție de urgența executării
              comenzii. Este indicată data de producere, aceasta nu include
              livrarea. Timpul de livrare depinde de serviciul selectat
              ulterior. Vom fi bucuroși să livrăm comanda dvs. oriunde în țară!
            </p>
            <h1 className="mb-1 text-gray-700">Tiraj</h1>
            <input
              type="text"
              id="name"
              defaultValue="100"
              className=" px-2 py-2 mb-3 border-2 hover:border-gray-400 rounded-[5px]"
            />
            <div className="flex items-center ml-1">
              <button className="mr-4 rounded-[10px]  py-1 hover:bg-gray-200 duration-150 ease-linear  border-2 px-3 text-black">
                -
              </button>
              <button className="rounded-[10px]  py-1 hover:bg-gray-200 duration-150 ease-linear   border-2 px-3 text-black">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-around items-center mt-10 mb-2 bg-gray-200 rounded-md">
            <div>
              <h1 className="text-2xl text-[#6F6F6F] font-semibold pt-2 px-3">
                Rezultat
              </h1>
              <p className="text-3xl text-black font-semibold px-3 pb-2">
                2100.00 Lei
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Produsul:</h1>
              <p>Paper ball pen POLI 100 buc.</p>
            </div>
          </div>
          <div className="flex justify-center mb-20 text-white bg-[#453CF7] cursor-pointer hover:bg-[#3730b9] py-2 rounded-md">
            <button className="">Adauga in cos</button>
          </div>
        </div>
      </div>
      <hr className="max-w-[84%] sm:max-w-[60%] mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />
    </>
  );
};

export default product;
