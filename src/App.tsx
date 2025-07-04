import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@/components/theme-provider"; // Added import

import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> {/* Wrapped with ThemeProvider */}
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
              <Route path="/registration" element={<RegistrationPage />} />
              {/* catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;