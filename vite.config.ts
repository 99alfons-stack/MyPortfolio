import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	// Sidan ligger på 99alfons-stack.github.io/MyPortfolio/, så alla byggda länkar måste börja med repots namn
	base: "/MyPortfolio/",
	plugins: [react()],
});
