import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrandLayout } from "@/components/BrandLayout";
import Index from "./pages/Index";
import Mission from "./pages/Mission";
import Logo from "./pages/Logo";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Stationery from "./pages/Stationery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <BrandLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/logo" element={<Logo />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<Typography />} />
            <Route path="/stationery" element={<Stationery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrandLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
