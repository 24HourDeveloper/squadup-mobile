import React from "react";
import { Button } from "react-native-paper";

type CustomButtonType = {
  mode: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  text: string;
  loading?: boolean;
  onPress: () => void;
};

export default function CustomButton({
  mode,
  text,
  loading,
  onPress,
}: CustomButtonType) {
  return (
    <Button
      loading={loading}
      mode={mode}
      style={{ paddingVertical: 5 }}
      onPress={onPress}
    >
      {text}
    </Button>
  );
}
