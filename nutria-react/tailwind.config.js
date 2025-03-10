/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme";
export const content = [

  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    ...heroui.theme,
  },
};
export const darkMode = "class";
export const plugins = [heroui()];