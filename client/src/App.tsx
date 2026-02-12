import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Blog from "./pages/Blog";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailure from "./pages/PaymentFailure";
import PaymentPending from "./pages/PaymentPending";
import AdminDashboard from "./pages/AdminDashboard";
import MyOrders from "./pages/MyOrders";
import AdminReports from "./pages/AdminReports";
import Ebook from "./pages/Ebook";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/produtos"} component={Produtos} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/sobre"} component={Sobre} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"/payment-success"} component={PaymentSuccess} />
      <Route path={"/payment-failure"} component={PaymentFailure} />
      <Route path={"/payment-pending"} component={PaymentPending} />
      <Route path={"/my-orders"} component={MyOrders} />
      <Route path={"/admin/reports"} component={AdminReports} />
      <Route path={"/admin"} component={AdminDashboard} />
      <Route path={"/ebook"} component={Ebook} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms-of-use"} component={TermsOfUse} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
