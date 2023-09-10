import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>RavCare</title>
        <link rel="icon" href="/assets/health-icon.svg" />
      </Head>
      <div className={poppins.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer position="top-right" />
      </div>
    </>
  );
}
