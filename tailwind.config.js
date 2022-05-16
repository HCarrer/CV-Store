module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-blue": "#000068",
        "base-grey": "#EDEDED",
      },
      backgroundImage: {
        ponteJK: "url('../public/assets/PonteJK.jpeg')",
      },
    },
  },
  plugins: [],
};
