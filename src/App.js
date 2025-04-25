import "./App.css";
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "./Navbar/Home";
import House from "./Houses/House";
import { AnimatePresence } from "framer-motion";
import Details from "./Houses/Details";

function App() {
  const location=useLocation()
  return (
    <><AnimatePresence >
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route  path="/houses" element={<House />} />
        <Route  path="/houses/:id" element={<Details />} />
        <Route  path="/*" element={<h1>ERROR PAGE</h1>} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
