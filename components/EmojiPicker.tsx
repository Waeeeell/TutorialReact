import React from 'react';
import { ImageSourcePropType, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface EmojiPickerProps {
  isVisible: boolean;
  onClose: () => void;
  onSelect: (emoji: ImageSourcePropType) => void; 
}

const emojis = [
  require('../assets/emojis/emoji2.png'),
  require('../assets/emojis/emoji3.png'),
]; 

export default function EmojiPicker({ isVisible, onClose, onSelect }: EmojiPickerProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Pressable onPress={onClose}>
            <View style={styles.closeButton}></View>
          </Pressable>
        </View>

        {/* Lista de emojis */}
        <View style={styles.emojiList}>
          {emojis.map((emoji, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                onSelect(emoji); // selecciona el emoji
                onClose(); // cierra el modal después
              }}
            >
              <View style={styles.emojiContainer}>
                <Text style={styles.emojiText}>😀</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '35%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    width: 75,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  emojiList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 20,
  },
  emojiContainer: {
    margin: 10,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 50,
  },
  emojiText: {
    fontSize: 28,
  },
});
