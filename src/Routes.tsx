
import { Routes, Route } from "react-router-dom";
import App from "./App";
import ServiceDetail from "./pages/ServiceDetail";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services/:slug" element={<ServiceDetail />} /> 
    </Routes>
  );
};

export default AllRoutes;
