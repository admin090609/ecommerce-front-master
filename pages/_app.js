import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../components/CartContext";
import Nav from "../components/Nav";
import '../styles/globals.css';
import Footer from "../components/Footer";



export default function App({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </>
  );
}
