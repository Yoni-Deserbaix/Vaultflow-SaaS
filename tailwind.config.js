/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-analytics": "0px 0px 36.45px 0px #591DDDBF",
        "custom-tokens": "0px 0px 36.45px 0px #9525C9BF",
        "custom-collab": "0px 0px 36.45px 0px #C925ABBF",
      },
    },
  },
  plugins: [],
};
