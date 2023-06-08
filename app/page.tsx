import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import {PageWrapper} from "./page-wrapper";

const Home = () => {
  return (
    <div className="h-fit ">
      <Navbar />
      <PageWrapper>
        <Hero />
      </PageWrapper>
    </div>
  );
};

export default Home;
