import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="Pantalla2" options={{ title: 'Pantalla 2' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}
