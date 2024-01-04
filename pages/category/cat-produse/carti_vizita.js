import React from "react";
import Link from "next/link";
import Image from "next/image";

const carti_vizita = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10">Cărți de vizită</h1>
            <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/standard">
                        <Image
                            src="/images/carti_de_vizita.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită standard</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/carton_special">
                        <Image
                            src="/images/tiparituri.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită pe carton special</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/UV">
                        <Image
                            src="/images/brosuri_carti_cataloage.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită imprimate UV</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/kraft">
                        <Image
                            src="/images/carnete.jpg"
                            alt=""
                            width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită pe hârtie din kraft</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/plastic">
                        <Image
                            src="/images/photo_printing.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită din plastic</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/econom">
                        <Image
                            src="/images/etichete_autocolante.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cărți de Vizită econom</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/suport">
                        <Image
                            src="/images/stikere_pvc.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suport Cărți de Vizită</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-carti_vizita/magnet">
                        <Image
                            src="/images/shopping_bags.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Suport Cărți de Vizită cu Magnet</p>
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

export default carti_vizita;
