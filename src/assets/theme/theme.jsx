import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: { background: "#f0f8ff", alterBackground: "#222333" },
    // * colors: {...}, // optional
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: { background: "#222333", alterBackground: "#f0f8ff" },
    // * colors: {...}, // optional
  },
});
