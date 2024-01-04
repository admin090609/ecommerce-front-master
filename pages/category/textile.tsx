import React from "react";
import Image from "next/image";
import Link from "next/link";

const textile = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">TEXTILE</h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/category/cat-textile/tshirts">
            <Image
              src="/images/tshirts.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Tricouri simple </p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-textile/polo">
            <Image
              src="/images/polo.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Tricouri Polo</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-textile/hanorac">
            <Image
              src="/images/hanorac.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Hanorace</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-textile/chipiu">
            <Image
              src="/images/chipiu.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Chipiuri</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-textile/torbe">
            <Image
              src="/images/torbe.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Torbe Eco</p>
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

export default textile;
