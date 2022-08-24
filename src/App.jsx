import React from "react";
import ToastContainer from "./components/ToastContainer/Index";

import AuthProvider from "./contexts/AuthContext";
import TechProvider from "./contexts/TechContext";
import ToastProvider from "./contexts/ToastContext";
import Routes from "./routes";

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <TechProvider>
          <Routes />
          <ToastContainer />
        </TechProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
