import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import Planner from "../components/Planner";

function Media() {
  return (
    <>
      <div>
        <Head>
          <title>Raiona || funds</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="./favicon.ico" />
        </Head>
        <Navbar />
        <center>
          <h1 style={{ marginTop: "20px", marginBottom: "80px" }}>
            Investment <span style={{ color: "#cca354" }}>Funds</span>
          </h1>
        </center>
        <Plans />
        <Planner />
        <Footer />
      </div>
    </>
  );
}

export default Media;
