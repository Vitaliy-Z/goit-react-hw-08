// It's project was created by Vitalii Zvieriev
import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Loader from "../loader/Loader";
const Container = lazy(() => import("../container/Container"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));

import "./App.css";
import ContactsPage from "../../pages/ContactsPage";

function App() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
