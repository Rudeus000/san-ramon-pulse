import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Documentos from "./pages/Documentos";
import Niveles from "./pages/Niveles";
import Eventos from "./pages/Eventos";
import Servicios from "./pages/Servicios";
import Recursos from "./pages/Recursos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/niveles" element={<Niveles />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/recursos" element={<Recursos />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
