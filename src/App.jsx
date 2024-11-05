import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Team from "./components/Team";
import Documents from "./components/Documents";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="app-container">
      <Header />
      <Overview />
      <Team />
      <Documents />
      <Footer />
    </div>
  );
}

export default App;
