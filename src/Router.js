import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./component/Footer";
import Nav from "./component/Nav";
import Main from "./page/Main";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;