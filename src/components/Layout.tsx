import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "./Footer";
import { GlitterField } from "./GlitterField";
import { Header } from "./Header";

export function Layout() {
  const location = useLocation();

  return (
    <>
      <GlitterField />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
