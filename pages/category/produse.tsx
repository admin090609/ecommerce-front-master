import React from "react";
import Link from "next/link";
import Image from "next/image";

const produse = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">PRODUSE</h1>
      <div className="flex justify-center max-w-[960px] mx-auto flex-wrap mb-10">
        <div className="product-card">
          <Link href="/category/cat-produse/carti_vizita">
            <Image
              src="/images/carti_de_vizita.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Cărți de vizită</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/tiparituri">
            <Image
              src="/images/tiparituri.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Tipărituri</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/brosuri">
            <Image
              src="/images/brosuri_carti_cataloage.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Broșuri, cărți, cataloage</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/carnete">
            <Image
              src="/images/carnete.jpg"
              alt=""
              width={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              height={100} // Aici setați dimensiunea dorită pentru "Printuri Mari"
              layout="responsive"
              className="rounded-sm"
            />
            <p>Carnete</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/photo_printing">
            <Image
              src="/images/photo_printing.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Foto printing</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/etichete_autocolante">
            <Image
              src="/images/etichete_autocolante.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Etichete și autocolante</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/stikere_pvc">
            <Image
              src="/images/stikere_pvc.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Stikere PVC</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/shopping_bags">
            <Image
              src="/images/shopping_bags.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Shopping Bags</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/pos_materiale">
            <Image
              src="/images/pos_materiale.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>POS-materiale</p>
          </Link>
        </div>
        <div className="product-card">
          <Link href="/category/cat-produse/design_grafic">
            <Image
              src="/images/design_grafic.jpg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
              className="rounded-sm"
            />
            <p>Design Grafic</p>
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

export default produse;
