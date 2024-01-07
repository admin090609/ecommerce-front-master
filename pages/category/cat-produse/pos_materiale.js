import React from "react";
import Link from "next/link";
import Image from "next/image";

const pos_materiale = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10">POS-materiale</h1>
            <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/suportPlexiglas">
                        <Image
                            src="/images/pos1.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suporturi din plexiglas</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/suportPliante">
                        <Image
                            src="/images/pos2.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suporturi pliante și flyere</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/suportLemn">
                        <Image
                            src="/images/pos3.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suporturi din lemn</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/suportPahare">
                        <Image
                            src="/images/pos4.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suport Pahare</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/wobblere">
                        <Image
                            src="/images/pos5.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Wobblere</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-pos/tableTent">
                        <Image
                            src="/images/pos6.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Table-Tent</p>
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

export default pos_materiale;
