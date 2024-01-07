import React from "react";
import Link from "next/link";
import Image from "next/image";

const etichete_autocolante = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10">Etichete și Autocolante</h1>
            <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/stickereRotunde">
                        <Image
                            src="/images/etichete1.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Stickere rotunde</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/stickerePatrate">
                        <Image
                            src="/images/etichete2.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Stickere pătrate</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/stickereDreptunghiulare">
                        <Image
                            src="/images/etichete3.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Stickere dreptunghiulare</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/stickereA">
                        <Image
                            src="/images/etichete4.jpg"
                            alt=""
                            width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Stickere A-size</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/eticheteCartonStandard">
                        <Image
                            src="/images/etichete5.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Etichete din carton standard</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/eticheteCartonPliate">
                        <Image
                            src="/images/etichete6.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Etichete din carton pliate</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/eticheteCartonSpecial">
                        <Image
                            src="/images/etichete7.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Etichete din carton special</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-etichete/eticheteCartonStantate">
                        <Image
                            src="/images/etichete8.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Etichete din carton stantate</p>
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

export default etichete_autocolante;
