import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";

const Event = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <PageHeader />
          <Typography component="h2">this is Event page</Typography>
          <Footer />
        </>
      )}
    </>
  );
};
export default Event;