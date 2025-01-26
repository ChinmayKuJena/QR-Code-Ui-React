import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "a18e-2401-4900-7163-bf08-3491-7aad-7973-6fd1.ngrok-free.app",
    ],
  },
  plugins: [react()],
});
