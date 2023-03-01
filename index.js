import React from "react";
import ReactDOM from "react-dom";

function Header()
{
  return (
    <>
      <header>
        <nav className="nav">
          <img src="./react-logo.png" className="nav-logo"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function Footer() 
{
  return (
    <>
      <footer>
        <small>
          © 2023 Neokyuubi development 
        </small>
      </footer>
    </>
  );  
}

function FirstComposabel()
{
  return (
    <>
      <Header />
      <h1>Func facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Neokyuubi is starting to use it</li>
      </ul>
      <Footer />
    </>
  );
}

ReactDOM.render(<FirstComposabel/>, document.getElementById("root"));