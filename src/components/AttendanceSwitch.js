import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function CircularButton() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  const lineStyle = pressed ? styles.lineVisible : styles.lineHidden;

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, pressed ? styles.buttonPressed : styles.buttonNotPressed]}>
      <View style={styles.innerCircle} />
      <View style={[styles.outerCircle, lineStyle]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderStyle: 'solid',
    marginBottom:30,
  },
  buttonPressed: {
    backgroundColor: '#0F0',
  },
  buttonNotPressed: {
    backgroundColor: 'red',
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
  outerCircle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#002E5D',
    borderStyle: 'solid',
  },
  lineHidden: {
    opacity: 0,
  },
  lineVisible: {
    borderColor: '#0F0',
  },
});
