import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../components/CartContext";
import Nav from "../components/Nav";
import '../styles/globals.css';
import Footer from "../components/Footer";
import Head from "next/head";



export default function App({ Component, pageProps }) {
  return (
    <>

      <CartContextProvider>
        <Head>
          <link rel="icon" href="logo1.png" type="image/x-icon" />
          <link rel="shortcut icon" href="logo1.png" type="image/x-icon" />
          <link rel="mask-icon" href="logo1.png" type="image/x-icon" />
          <link rel="apple-touch-icon" href="logo1.png" type="image/x-icon" />
          <meta name="description" content="Transformăm amintirile tale în obiecte unice! Cu serviciile noastre de printare personalizată, aducem la viață fotografiile tale preferate pe obiecte precum căni, huse de telefon, perne și multe altele. Oferim o varietate de produse de calitate, personalizate cu atenție la detalii, pentru a aduce unicitate și bucurie în viața ta sau pentru a oferi cadouri memorabile celor dragi. Descoperă colecția noastră diversă și lasă-ne să aducem magia printării personalizate în fiecare aspect al vieții tale. Creează amintiri de neuitat cu produse personalizate de la noi!"></meta>
          <meta
            name="keywords"
            content="printare personalizată, Obiecte personalizate, Căni cu fotografii, Huse de telefon personalizate, Cadouri foto, Printare pe perne, Suveniruri personalizate, Printare pe tricouri, Magnete foto, Puzzle-uri personalizate,
             Album foto personalizat, Stickere personalizate, Calendare cu poze, Canvase foto personalizate, Printare pe plăci, Cărți de vizită personalizate, Ceasuri cu fotografii, Puzzle-uri foto, Produse de artizanat personalizate, 
             Poster cu poza personalizat, Fotocarte, Oglinzi cu poze, Cărți de colorat personalizate, Jurnal cu fotografii, Căni pentru cupluri, Seturi de masă personalizate, Produse promoționale personalizate, Stick USB cu poze, 
             Tablouri foto, Etichete pentru bagaje personalizate, Lumanari personalizate, Pantofi personalizati cu poze, Decoratiuni personalizate, Inscripționare pe tricouri, Personalizare haine, Pături cu fotografii, 
             Geamantan cu poze, Portofele cu fotografii, Bluză personalizată, Săculeți cu poze, Pernă cu poza personalizată, Brelocuri foto, Căni termosensibile personalizate, Etui pentru telefon cu poza, Brățări cu poze, 
             Ținute personalizate, Umbrele cu poze, Imprimare pe textile, Fete de pernă personalizate, Cadre foto personalizate, Pălării personalizate, Ghiozdane cu poze, Ușișoare cu poze, Ochelari de soare personalizați, 
             Tatuaje temporare personalizate, Căni izoterme personalizate, Săculeți de cadouri personalizați, Rame foto personalizate, Surprize personalizate, Produse de birou personalizate, Curele cu poze, 
             Bannere personalizate, Carduri de felicitare cu poze, Lanțuri cu poze, Pungi de cadouri personalizate, Scrabble cu poze, Butoni cu poze, Pălărie cu boruri personalizată, Prosoape de baie personalizate, 
             Statuete foto, Globuri cu zăpadă personalizate, Set de birou cu poze, Păpuși personalizate, Cartele SIM cu poze, Portret cu poza, Trusă de machiaj personalizată, Accesorii pentru animale de companie cu poze, 
             Pături picnic cu poze, Pungi de cadouri personalizate, Tatuaje cu poze, Cercei cu poze, Sticle de apă personalizate, Făclii cu poze, Ceasuri de perete cu poze, Căni de călătorie cu poze, Plăci de mouse personalizate, 
             Șervete personalizate, Rucsacuri cu poze, Portofel cu fermoar personalizat, Perne de călătorie cu poze, Covoare cu poze, Semne de carte personalizate, Manșete cu poze, Decorațiuni pentru tort cu poze, 
             Ghirlande cu poze, Seturi de grădinărit cu poze, Genți de mână personalizate, Etui de ochelari cu poze, Fuste personalizate, Plante suculente în ghiveci cu poze, Căni de bere personalizate, Lumânări parfumate cu poze, 
             Covorașe de mouse cu poze, Lenjerii de pat personalizate, Măști cu poze, Săniuțe cu poze, Huse pentru laptop cu poze, Mape cu poze, Pături de picnic cu poze, Mese de cafea cu poze, Pături cu mâneci cu poze, 
             Fete de masă personalizate, Mouse-uri cu poze, Obiecte de birou personalizate, Stative pentru telefon cu poze, Pături de plajă cu poze, Cadre foto digitale personalizate, Ornamente pentru brad cu poze, 
             Încălțăminte personalizată, Umerașe cu poze, Jocuri de masă personalizate, Suporturi pentru pahare cu poze, Brichete cu poze, Draperii de duș personalizate, Plăci de identificare personalizate, Jachete cu poze, 
             Pături de copii cu poze, Inscripții pe tricouri, Pături pentru animale de companie cu poze, Încălțăminte pentru copii personalizată, Pături pentru câini cu poze, Lanterne cu poze, Încălțăminte pentru bărbați personalizată, 
             Plăci de bebeluși cu poze, Așternuturi cu poze, Încălțăminte pentru femei personalizată, Băițe pentru copii cu poze, Seturi de cadouri personalizate, Căciuli cu poze, Pături pentru scaune cu poze, Jucării personalizate, 
             Pături pentru bănci cu poze, Decoruri de perete cu poze, Pături pentru exterior cu poze, Album foto digital personalizat, Decorațiuni pentru casă cu poze, Pături pentru evenimente cu poze, Seturi de cafea personalizate, 
             Produse pentru îngrijire personalizate, Pături pentru grădină cu poze, Mini-pături cu poze, Seturi de ceai personalizate, Pături pentru interior cu poze, Suporturi pentru pahare personalizate, Pături pentru piscină cu poze, 
             Perne decorative personalizate, Pături pentru picnic cu poze, Suporturi pentru instrumente de scris cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Rame foto digitale cu poze, Pături pentru animale de companie cu poze, 
             Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, 
             Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, 
             Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, Pături pentru piscină cu poze, Pături pentru picnic cu poze, 
             Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, 
             Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, 
             Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, 
             Pături pentru interior cu poze, Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, 
             Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, Pături pentru piscină cu poze, 
             Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, 
             Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, 
             Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, 
             Pături pentru grădină cu poze, Pături pentru interior cu poze, Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, 
             Pături pentru copii cu poze, Pături pentru scaune cu poze, Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Pături pentru interior cu poze, 
             Pături pentru piscină cu poze, Pături pentru picnic cu poze, Pături pentru plajă cu poze, Pături pentru yoga cu poze, Pături pentru animale de companie cu poze, Pături pentru copii cu poze, Pături pentru scaune cu poze, 
             Pături pentru bănci cu poze, Pături pentru exterior cu poze, Pături pentru evenimente cu poze, Pături pentru grădină cu poze, Sanduta, Art, Sanduta Art, Ialoveni, Moldova, poze, print, printer" />
          <title>Sănduța ART</title>
        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider >
    </>
  );
}
