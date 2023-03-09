import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

function Page()
{
  return (
  <>
    <Header />
    <MainContent/>
    <Footer/>
  </>
  );
}

ReactDOM.render(<Page/>, document.getElementById("root"));