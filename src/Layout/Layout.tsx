import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import logo from "assets/logo.png";

const backgroundFromProduct = (background = null) => {
  return background === null
    ? {}
    : {
        backgroundImage: `url("${background}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%",
      };
};

const Content = (props: any) => <main className="content">{props.children}</main>;

export const Layout = ({
  menuItems,
  goToCompucieScreen,
  goToProminent,
  background,
  goHome,
  failedOrders,
  children,
}: any) => (
  <div className="wrapper" style={backgroundFromProduct(background)} data-testid="layout">
    <Header onClick={goToCompucieScreen} failedOrders={failedOrders} />
    <Sidebar menuItems={menuItems} />
    <Content>{children}</Content>
    <Footer />
    <div className="arrow">
      <div className="arrowContent">
        <img
          src={logo}
          className="franckenLogo img-fluid"
          alt="Logo of T.F.V. 'Professor Francken'"
          onClick={goHome}
          onDoubleClick={goToProminent}
        />
      </div>
    </div>
  </div>
);
