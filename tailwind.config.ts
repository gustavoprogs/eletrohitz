import type { Config } from "tailwindcss";
const config: Config = { content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink: "#08090d", panel: "#11131b", violet: "#9b5cff", cyan: "#49e6e1" } } }, plugins: [] };
export default config;
