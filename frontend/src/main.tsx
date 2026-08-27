import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// If you're working with authenication, don't forget to do this
// import { AuthProvider } from "@/context/AuthContext"; // 👈 import provider

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <AuthProvider> */}
        <App />
        {/* </AuthProvider> */}
    </StrictMode>
);
