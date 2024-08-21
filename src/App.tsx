import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./layouts/Navbar/Navbar";
import ListHomes from "./pages/ListHomes";
import HomeDetails from "./pages/HomeDetails";
import SellerProfile from "./pages/SellerProfile";

const App = () => {
  return (
    <div className="min-h-screen bg-background font-lato antialiased md:px-24 lg:px-28">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListHomes />} />
        <Route path="/list/:id" element={<HomeDetails />} />
        <Route path="/profile" element={<SellerProfile />} />
      </Routes>
    </div>
  );
};

export default App;
