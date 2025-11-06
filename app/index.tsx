import * as ImagePicker from 'expo-image-picker';
import { Link } from "expo-router";
import { useEffect, useState } from 'react';
import { Alert, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Button from '../components/Button';
import CircleButton from '../components/CircleButton';
import EmojiPicker from '../components/EmojiPicker';
import EmojiSticker from '../components/EmojiSticker';
import ImageViewer from '../components/ImageViewer';

const PlaceholderImage = require('../assets/images/react-logo.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso requerido', 'Se necesita acceso a la galería para seleccionar imágenes.');
      }
    })();
  }, []);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage({ uri: result.assets[0].uri });
    } else {
      alert('No seleccionaste ninguna imagen.');
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ? selectedImage : PlaceholderImage} />

        {/* Si hay emoji seleccionado, mostrarlo sobre la imagen */}
        {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>

      {/* Footer dinámico */}
      {selectedImage ? (
        <View style={styles.footerContainer}>
          <CircleButton onPress={() => setIsModalVisible(true)} />
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Elegir foto" onPress={pickImageAsync} />
          <Button label="Usar esta foto" />
        </View>
      )}

      {/* Picker de emojis */}
      <EmojiPicker
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelect={setPickedEmoji}
      />

      {/* Enlaces de navegación */}
      <View style={styles.linkContainer}>
        <Link href="/Pantalla2" style={styles.linkText}>
          Ir a Pantalla 2 →
        </Link>
        <Link href="/about" style={styles.linkText}>
          Ir a About →
        </Link>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 30,
    marginBottom: 10,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  linkContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  linkText: {
    color: '#00bfff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
  },
});
