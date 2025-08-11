/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        baseflow: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#64748b",
          "secondary-content": "#ffffff",
          accent: "#3b82f6",
          "accent-content": "#ffffff",
          neutral: "#374151",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#f3f4f6",
          "base-content": "#111827",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",

          "--rounded-btn": "0.375rem",
          "--rounded-badge": "1.9rem",
        },
      },
      {
        dark: {
          primary: "#000000",
          "primary-content": "#FFFFFF",
          secondary: "#5B5B5B",
          "secondary-content": "#FFFFFF",
          accent: "#93BBFB",
          "accent-content": "#00AA62",
          neutral: "#00AA62",
          "neutral-content": "#ffffff",
          "base-100": "#28313D",
          "base-200": "#000000",
          "base-300": "#000000",
          "base-content": "#ffffff",
          info: "#3E6CE6",
          success: "#10B981",
          warning: "#FDB022",
          error: "#F04437",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
