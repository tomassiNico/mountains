import { useState } from "react";
import "./App.css";
import MountainList from "./components/mountains/MountainList";
import Header from "./components/shared/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MountainList />
    </div>
  );
}

export default App;
