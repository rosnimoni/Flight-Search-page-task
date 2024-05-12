import React from "react";
import "antd/dist/reset.css";
import "./App.css";
import Navbar from "./Navbar/Index";
import Search from "./SearchArea/Search";
import TableData from "./TableArea/TableData";

function App() {
  return (
    <>
      <Navbar />
      <div className="main_content">
        <Search />

        <TableData />
      </div>
    </>
  );
}

export default App;
