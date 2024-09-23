import React from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import darkregular from "@/themes/darkregular";
import lightregular from "@/themes/lightregular";
import SignUpScreen from "./auth/signup";

export default function index() {
  let colorScheme = useColorScheme();

  const theme = {
    colors:
      colorScheme === "dark" ? darkregular["colors"] : lightregular["colors"],
    roundness: 30,
  };

  return (
    <PaperProvider theme={theme}>
      <SignUpScreen />
    </PaperProvider>
  );
}
