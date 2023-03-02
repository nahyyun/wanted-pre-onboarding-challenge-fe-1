import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import { TodoContextProvider } from "./contexts/TodoContext";
import { SnackbarContextProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <TodoContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/auth">
                <Route path="signup" element={<SignUpPage />} />
                <Route path="login" element={<LoginPage />} />
              </Route>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </TodoContextProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}

export default App;
