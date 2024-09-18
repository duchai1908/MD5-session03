import React from "react";
import Bai1 from "./components/Bai1";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import "./App.css"

export default function App() {
  return (
    <div>
      <Bai1 />
      <Bai2 />
      <div
        style={{
          border: "2px solid black",
          padding: "10px",
          borderRadius: "10%",
        }}
      >
        <Bai3 />
      </div>
    </div>
  );
}
