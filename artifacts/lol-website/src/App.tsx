import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

// Pages
import HomePage from "@/pages/HomePage";
import ChampionsPage from "@/pages/ChampionsPage";
import ChampionProfilePage from "@/pages/ChampionProfilePage";
import HistoryPage from "@/pages/HistoryPage";
import RegionsPage from "@/pages/RegionsPage";
import RegionDetailPage from "@/pages/RegionDetailPage";
import GameModesPage from "@/pages/GameModesPage";
import EsportsPage from "@/pages/EsportsPage";
import MusicPage from "@/pages/MusicPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1] as [number,number,number,number] } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
};

function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Switch location={location}>
          <Route path="/" component={HomePage} />
          <Route path="/campeones" component={ChampionsPage} />
          <Route path="/campeon/:nombre" component={ChampionProfilePage} />
          <Route path="/historia" component={HistoryPage} />
          <Route path="/regiones" component={RegionsPage} />
          <Route path="/region/:nombre" component={RegionDetailPage} />
          <Route path="/modos-de-juego" component={GameModesPage} />
          <Route path="/esports" component={EsportsPage} />
          <Route path="/musica" component={MusicPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <CustomCursor />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
