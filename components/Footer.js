import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <hr className="max-w-[84%] sm:max-w-[60%] mt-20 mb-10 border-2 rounded-xl items-center justify-center m-auto  border-[#B1B1B1]" />

      <div className="flex sm:flex-row sm:justify-evenly sm:items-start sm:p-7 flex-col justify-center text-[#2D3046]">
        <div className="text-center">
          <div className="flex justify-center space-x-1">
            <Link href="/">
              <Image
                src="/images/logo_alb.jpg"
                alt="Logo"
                width="150"
                height="150"
              />
            </Link>
          </div>
          <div>
            <div className="flex justify-center space-x-1">
              <Link href="https://www.instagram.com/sandutaart/">
                <Image
                  src="/images/instagram.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://www.facebook.com/sanduta.art/">
                <Image
                  src="/images/facebook.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex justify-center space-x-1 mt-2">
              <Link href="https://msng.link/o?37369111401=vi">
                <Image src="/images/viber.png" alt="" width={30} height={30} />
              </Link>
              <Link href="https://msng.link/o?37369111401=wa">
                <Image
                  src="/images/whatsapp.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
              <Link href="https://msng.link/o?37369111401=tg">
                <Image
                  src="/images/telegram.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold text-center sm:text-start mt-12 sm:mt-0 mb-3">
            Contacte
          </h1>
          <Link
            href="tel:+37369111401"
            className="flex items-center justify-center sm:justify-start mb-2"
          >
            <Image
              src="/images/phone.png"
              alt="Phone"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold hover:underline">069 111 401</p>
          </Link>
          <div className="flex items-center justify-center sm:justify-start mb-2">
            <Image
              src="/images/gmail.png"
              alt=""
              width={40}
              height={0}
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2"
            />
            <p className="font-semibold">sanduta.art@gmail.com</p>
          </div>
          <Link
            href="https://www.google.com/maps/place/Sanduta+Art/@46.946888,28.7743665,15z/data=!4m6!3m5!1s0x40c97f77a5797f33:0x44dde14e3f8587d2!8m2!3d46.946888!4d28.7743665!16s%2Fg%2F11n7k4g97z?hl=en&entry=ttu"
            className="flex items-center justify-center sm:justify-start"
          >
            <Image
              src="/images/location.png"
              alt="Location"
              width="40"
              height="0"
              className="w-[25px] lg:w-[17px] lg:h-[17px] h-[25px] mr-2 "
            />
            <p className="font-semibold hover:underline">
              Ialoveni, Alexandru cel Bun 78/1
            </p>
          </Link>
        </div>
        <div className="flex flex-col sm:mt-0 mt-12 sm:mb-0 mb-10">
          <h1 className="text-xl font-bold text-center sm:text-start mb-3">
            Pagini
          </h1>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/produse"
          >
            Produse
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/marketing"
          >
            Materiale Marketing
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/textile"
          >
            Textile
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/standuri"
          >
            Standuri Expozitionale
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/printuri"
          >
            Printuri Mari
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/servicii"
          >
            Servicii
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/contacte"
          >
            Contacte
          </Link>
          <Link
            className="text-center sm:text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/faq"
          >
            FAQ
          </Link>
        </div>
        <div className="sm:flex flex-col hidden ">
          <h1 className="text-xl font-bold text-start mb-3">Categorii</h1>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/carti_vizita"
          >
            Cărți de vizită
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/tiparituri"
          >
            Tipărituri
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/brosuri"
          >
            Broșuri, cărți, cataloage
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/carnete"
          >
            Carnete
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/etichete_autocolante"
          >
            Etichete și autocolante
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/stikere_pvc"
          >
            Stichere PVC
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/photo_printing"
          >
            Foto Printing
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/shopping_bags"
          >
            Shopping Bags
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/pos_materiale"
          >
            POS-materiale
          </Link>
          <Link
            className="text-left font-medium text-[16px] mb-1 hover:text-[#E64657] transform hover:translate-x-1 transition-all duration-150 linear"
            href="/category/cat-produse/design_grafic"
          >
            Design Grafic
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
