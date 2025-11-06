import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Pantalla2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla 2</Text>
      <Link href="/" style={styles.link}>Volver</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  link: {
    color: '#00bfff',
    fontSize: 18,
  },
});
