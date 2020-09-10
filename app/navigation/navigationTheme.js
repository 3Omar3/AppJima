import { DefaultTheme } from "@react-navigation/native";
import Colors from "../config/colors";

export default myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
  },
};
