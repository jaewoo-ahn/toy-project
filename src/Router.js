import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from "./component/Footer";
import Nav from "./component/Nav";

import Main from "./page/Main/Main";
import Text from "./page/Text/Text";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/text" element={<Text />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
