export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Define the same font families here for IntelliSense & theme usage
      fontFamily: {
        zentry: ['zentry-regular', 'sans-serif'],
        circular: ['circular-web', 'sans-serif'],
        robertRegular: ['robert-regular', 'sans-serif'],
        robertMedium: ['robert-medium', 'sans-serif'],
        general: ['general', 'sans-serif'],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
    },
  },
  plugins: [],
}
}