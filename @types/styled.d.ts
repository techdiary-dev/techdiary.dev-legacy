import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    primaryDark: string;

    // Secondary
    secondary: string;
    secondaryDark: string;

    // Dark
    dark: string;
    semiDark: string;
    lightDark: string;

    // Grey
    grey: string;
    darkGrey: string;
    lightGrey: string;

    // Red
    red: string;
    yellow: string;

    // radius
    radius_1: string;
    radius_2: string;
    radius_3: string;
    radius_100p: string;
  }
}
