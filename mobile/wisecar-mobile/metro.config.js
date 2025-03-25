// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add resolution for NativeWind
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];
config.transformer.unstable_allowRequireContext = true;

module.exports = config; 