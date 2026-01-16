import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CustomWebsites from "./pages/services/CustomWebsites";
import Ecommerce from "./pages/services/Ecommerce";
import Branding from "./pages/services/Branding";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DesignCatalogue from "./pages/DesignCatalogue";
import ComingSoon from "./pages/ComingSoon";
import Pricing from "./pages/Pricing";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/custom-websites" element={<CustomWebsites />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/pricing" element={<Pricing />} /> {/* Add Pricing Route */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/design-catalogue" element={<DesignCatalogue />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/thank-you" element={<ThankYou />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
