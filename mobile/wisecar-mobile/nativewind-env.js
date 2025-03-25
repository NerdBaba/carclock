/**
 * NativeWind Environment Configuration
 * This file is needed to configure NativeWind v4 correctly
 */
module.exports = {
  // Simplified configuration for NativeWind v4
  tailwind: {
    config: './tailwind.config.js',
  },
  content: {
    files: [
      './App.{js,jsx,ts,tsx}',
      './app/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}'
    ],
  },
}; 