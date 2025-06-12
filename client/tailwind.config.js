/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Custom extra small
        sm: "640px", // Small (default)
        md: "768px", // Medium (default)
        lg: "1024px", // Large (default)
        xl: "1280px", // Extra large (default)
        "2xl": "1536px", // 2x extra large (default)
        "3xl": "1800px", // Example custom extra-extra-large
      },
    },
  },
  plugins: [],
};
