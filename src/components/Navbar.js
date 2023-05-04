import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();

  function handleLogout() {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Employee Attendance App</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#0047AB',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
