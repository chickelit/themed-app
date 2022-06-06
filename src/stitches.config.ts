import { createStitches } from "@stitches/react";

export const { createTheme, styled, globalCss, theme } = createStitches({
  theme: {
    colors: {
      $textColor: "#777",
      $titleColor: "#2fa1ff",
      $fillColor: "#2fa1ff",
    },
    transitions: {
      $theme: "all 0.15s linear",
    },
  },
});

export const lightTheme = createTheme("light", {
  colors: {
    $bgColor: "#f0f8ff",
    $bgColorDarker: "#fff",
    $bgColorSecondary: "#e9f5ff",
    $bgColorSecondaryDarker: "#e7f3fd",
  },
});

export const darkTheme = createTheme("dark", {
  colors: {
    $bgColor: "#24292d",
    $bgColorLighter: "#323840",
    $bgColorSecondary: "#404852",
    $bgColorSecondaryDarker: "#425054",
  },
});
