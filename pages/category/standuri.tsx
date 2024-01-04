import React from "react";
import Image from "next/image";
import Link from "next/link";

const standuri = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        STANDURI EXPOZITIONALE
      </h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/category/cat-standuri/roll_up">
            <Image
              src="/images/roll_up.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Roll-Up Banner Standard</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/mini_roll_up">
            <Image
              src="/images/mini_roll_up.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Roll-Up Banner Premium</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/free_roll_up">
            <Image
              src="/images/free_roll_up.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Roll-Up Banner cu 2 fețe</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/totem_textil">
            <Image
              src="/images/totem_textil.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Totem textil</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/wall_banner">
            <Image
              src="/images/wall_banner.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>X-Banner Econom</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/stand_banner">
            <Image
              src="/images/stand_banner.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>X-Banner Premium</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/people_stand">
            <Image
              src="/images/people_stand.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>People stopper (A-Stand)</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-standuri/people_banner">
            <Image
              src="/images/people_banner.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>People stopper Double Frame</p>
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

export default standuri;
