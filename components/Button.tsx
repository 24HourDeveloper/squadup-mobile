import React from "react";
import { Button } from "react-native-paper";

type CustomButtonType = {
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  text: string;
  onPress: () => void;
};

export default function CustomButton({
  mode,
  text,
  onPress,
}: CustomButtonType) {
  return (
    <Button mode={mode} style={{ paddingVertical: 5 }} onPress={onPress}>
      {text}
    </Button>
  );
}
