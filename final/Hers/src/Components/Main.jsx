import { useState } from "react";
import "./Main.css";
import Articles from "./Articles.jsx";
import Style from "./Style.jsx";
import Beauty from "./Beauty.jsx";
import Watch from "./Watch.jsx";
import Cart from "./Cart.jsx";



function Main({ page, onNav }) {
  return (
    <main className="main" id="main">
      {page === 'Articles' && <Articles onNav={onNav} />}
      {page === 'Watch' && <Watch />}
      {page == 'Style' && <Style onNav={onNav} />}
      {page == 'Beauty' && <Beauty />}
      {page == 'Cart' && <Cart />}
    </main>
  )
}
export default Main;
