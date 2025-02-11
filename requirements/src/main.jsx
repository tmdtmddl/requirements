import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Project from "./Project.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import ProjectProvider from "./context/ProjectProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":projectId" element={<Project />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>
);
