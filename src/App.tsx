import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/landingPage.tsx/home";
import AuthPage from "./components/pages/auth/authpage";
import DropPage from "./components/pages/drops";
import ReservationPage from "./components/pages/reservationPage/reservation";
import Layout from "./components/layout/layout";
import ProtectedRoute from "./components/protectedRoute";
import AboutSection from "./components/pages/about/about";
import ContactSection from "./components/pages/contact/contract";


export default function App() {
  return (
    <Routes>

      {/* layout route */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/auth" element={<AuthPage />} />
          <Route
          path="/drops"
          element={
            <ProtectedRoute>
              <DropPage />
            </ProtectedRoute>
          }
        />
       <Route
  path="/reservation/:id"
  element={
    <ProtectedRoute>
      <ReservationPage />
    </ProtectedRoute>
  }
/>
      </Route>

    </Routes>
  );
}