import React from "react";
import Link from "next/link";
import Image from "next/image";

const carnete = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10">Carnete</h1>
            <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carnete/carneteSpira">
                        <Image
                            src="/images/carnete1.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Carnete simple prinse cu spiră</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carnete/carneteColor">
                        <Image
                            src="/images/carnete2.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Carnete cu interior color prinse cu spiră</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carnete/carneteSimple">
                        <Image
                            src="/images/carnete.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Carnete simple prinse cu clei</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carnete/carneteClei">
                        <Image
                            src="/images/carnete4.jpg"
                            alt=""
                            width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Carnete cu interior color prinse cu clei</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carnete/carneteCopertaTare">
                        <Image
                            src="/images/carnete5.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Carnete cu copertă tare prinse cu spiră</p>
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

export default carnete;
