import React from "react";
import Link from "next/link";
import Image from "next/image";

const stickerePVC = () => {
    return (
        <>
            <h1 className="text-center font-bold text-3xl mt-10 mb-10">Foto printing</h1>
            <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/magnetiFoto">
                        <Image
                            src="/images/photo1.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Magneți cu foto</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/magnetiLogo">
                        <Image
                            src="/images/photo2.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Magneți corporativi cu logo</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/fotoPuzzle">
                        <Image
                            src="/images/photo3.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Foto pe puzzle</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/mouse-pad">
                        <Image
                            src="/images/photo4.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Mouse-Pad Personalizat</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/pernaFoto">
                        <Image
                            src="/images/photo5.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Perna cu foto</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaAlba">
                        <Image
                            src="/images/photo6.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană alba, 300ml</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaCafea">
                        <Image
                            src="/images/photo7.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană pentru cafea</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaInteriorColor">
                        <Image
                            src="/images/photo8.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană cu interior color</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaFullColor">
                        <Image
                            src="/images/photo9.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană cu margine și toarta colore</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaSemiColor">
                        <Image
                            src="/images/photo10.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană cu interior și toarta colore</p>
                    </Link>
                </div>
                <div className="product-card">
                    <Link href="/category/cat-produse/cat-photo/canaChameleon">
                        <Image
                            src="/images/photo11.jpg"
                            alt=""
                            width={100}
                            height={100}
                            layout="responsive"
                            className="rounded-sm"
                        />
                        <p>Cană chameleon</p>
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

export default stickerePVC;
