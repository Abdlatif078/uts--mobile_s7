import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="menu" />
      <Stack.Screen name="masuk" />
      <Stack.Screen name="keluar" />
    </Stack>
  );
}
