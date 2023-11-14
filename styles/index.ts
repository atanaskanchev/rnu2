import { UnistylesRegistry } from "react-native-unistyles";
import { breakpoints } from "./breakpoints";
import { darkTheme, lightTheme, premiumTheme } from "./theme";

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
  premium: typeof premiumTheme;
};

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}

  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
  premium: premiumTheme,
})
  .addConfig({
    adaptiveThemes: true,
  })
  .addBreakpoints(breakpoints);

export { breakpoints, darkTheme, lightTheme, premiumTheme };
