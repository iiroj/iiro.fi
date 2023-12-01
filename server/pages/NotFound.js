import React from "react";

import Footer from "../components/Footer.js";

const NotFound = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <h2>Four Zero Four</h2>
      <Footer links={[{ href: "/", text: "Back Home" }]} />
    </>
  );
};

export default NotFound;
