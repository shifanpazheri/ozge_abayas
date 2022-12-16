// eslint-disable-next-line
import React from "react";
import Footer from "../components/Footer";
import TopCarousel from "../components/TopCarousel";
import TopNavBar from "../components/TopNavBar";
import DressList from "../components/DressList";

function Home() {
  return (
    <div>
      <TopNavBar />
      <TopCarousel />
      <DressList />
      <Footer />
    </div>
  );
}

export default Home;
