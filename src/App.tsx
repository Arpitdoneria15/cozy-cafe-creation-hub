
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import AppOpening from "./pages/AppOpening";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const queryClient = new QueryClient();

const App = () => {
  const selectedCity = localStorage.getItem("selectedCity");
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {selectedCity && <Navbar />}
            {selectedCity && <Cart />}
            <Routes>
              <Route path="/" element={!selectedCity ? <AppOpening /> : <Navigate to="/home" />} />
              <Route path="/home" element={selectedCity ? <Home /> : <Navigate to="/" />} />
              <Route path="/menu" element={selectedCity ? <Menu /> : <Navigate to="/" />} />
              <Route path="/gallery" element={selectedCity ? <Gallery /> : <Navigate to="/" />} />
              <Route path="/contact" element={selectedCity ? <Contact /> : <Navigate to="/" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
