/**
 * Colors for the app with Yellow and Black/Blue theme.
 */

const yellowColor = '#FFCC00'; // Yellow color for primary accents
const blackColor = '#000000'; // Black color for button and text
const blueColor = '#0a7ea4'; // Blue accent for some UI elements
const backgroundLight = '#FFF8E1'; // Light yellow background for light mode
const backgroundDark = '#1E1B1D'; // Dark color with slight yellow tint for dark mode
const textColorLight = '#333333'; // Dark text color for light mode
const textColorDark = '#ECEDEE'; // Light text color for dark mode

export const Colors = {
  light: {
    text: textColorLight,
    background: backgroundLight,
    tint: yellowColor, // Yellow tint for highlights
    icon: blueColor, // Blue for icon accents
    button: blackColor, // Black button background
    buttonText: '#FFF', // White text on buttons
    contentBackground: '#FFEB3B', // Slightly muted yellow for content background
  },
  dark: {
    text: textColorDark,
    background: backgroundDark,
    tint: blueColor, // Blue tint for dark mode accents
    icon: '#9BA1A6', // Lighter color for icons in dark mode
    button: blackColor, // Black button background
    buttonText: '#FFF', // White text on buttons
    contentBackground: '#333333', // Dark background with slight yellow tint for dark mode
  },
};
