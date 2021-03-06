import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../../Components/Header/index";
import Carousel from "../../Components/Carousel/index";
import Banner from "../../Components/Banner/index";
import Category from "../../Components/Category/index";
import AdverBanner from "../../Components/AdverBanner/index";
import Course from "../../Components/Course";
import BottomBanner from "../../Components/BottomBanner";
import OurTeacher from "../../Components/OurTeachers";
import Event from "../../Components/UpcomingEvent";
import Footer from "../../Components/Footer";
import PreloadingPage from "../../Components/PreloadingPage/index";

const Home = () => {
  //Loading Page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loaing page

  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <Carousel />
          <Banner />
          <Category />
          <AdverBanner />
          <Course />
          <BottomBanner />
          <OurTeacher />
          <Event />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
