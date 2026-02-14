/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          firo: {
            navy: "#0B1220",
            blue: "#2563FF",
            violet: "#7C3AED",
            bg: "#F7F9FC",
            text: "#0F172A",
            muted: "#64748B",
            line: "#E2E8F0",
            success: "#16A34A",
            warn: "#D97706",
          },
        },
        boxShadow: {
          soft: "0 10px 30px rgba(2, 6, 23, 0.10)",
        },
      },
    },
    plugins: [],
  };
  