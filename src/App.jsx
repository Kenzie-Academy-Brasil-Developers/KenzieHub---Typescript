import React from "react";

import AuthProvider from "./contexts/AuthContext";
import TechProvider from "./contexts/TechContext";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <TechProvider>
        <Routes />
      </TechProvider>
    </AuthProvider>
  );
}

export default App;
