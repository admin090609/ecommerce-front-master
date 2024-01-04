import React from "react";
import Link from "next/link";
import Image from "next/image";

const marketing = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        MATERIALE MARKETING
      </h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/category/cat-marketing/pixuriEco">
            <Image
              src="/images/pixuri_eco.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri Eco</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/pixuriMetalice">
            <Image
              src="/images/pixuri_metalice.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri Metalice</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/pixuriPlastic">
            <Image
              src="/images/pixuri_plastic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Pixuri din plastic </p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/sticleButelii">
            <Image
              src="/images/sticle_butelii.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Sticle și Butelii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/Termosuri">
            <Image
              src="/images/termosuri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Termosuri și Căni termice</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/caniCuLogo">
            <Image
              src="/images/cani_cu_logo.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Căni cu logo</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/USB">
            <Image
              src="/images/USB_Flash_Drive.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>USB Flash Drive</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/brelocuri">
            <Image
              src="/images/brelocuri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Brelocuri</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/accesoriiLucru">
            <Image
              src="/images/accesorii_lucru.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Accesorii pentru oficiu</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/lanyards">
            <Image
              src="/images/lanyards.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Lanyarduri personalizate</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/ecusoane">
            <Image
              src="/images/ecusoane.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Ecusoane și accesorii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/agenda">
            <Image
              src="/images/agenda.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Agende 2024</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/agenda-person">
            <Image
              src="/images/agenda1.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Personalizare agende</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/rucsac">
            <Image
              src="/images/rucsac.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Genți și călătorii</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/umbrela">
            <Image
              src="/images/umbrela.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Umbrele</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/fanioane">
            <Image
              src="/images/fanioane.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Stegulețe și fanioane</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-marketing/cadouri">
            <Image
              src="/images/cadouri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Suvenire și cadouri corporative</p>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .product-card {
          text-align: center;
          margin: 10px;
          width: calc(50% - 40px); /* Two columns on mobile */
          height: 200px; /* Aici setați dimensiunea dorită pentru toate imaginile */
          transition: filter 0.3s; /* Adăugăm o tranziție pentru efect de hover */
        }

        .product-card p {
          margin-top: 10px;
          text-align: start;
          font-weight: 600;
        }

        .product-card:hover {
          filter: contrast(
            80%
          ); /* Ajustați valoarea pentru a face imaginea mai luminoasă sau mai întunecată */
        }

        @media (min-width: 768px) {
          .product-card {
            width: 200px; /* Revert to three columns on larger screens */
          }
        }
      `}</style>
    </>
  );
};

export default marketing;
