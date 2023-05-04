import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    // Dummy employee login
    if (email === 'employee@example.com' && password === 'password') {
      navigation.navigate('Home');
    } else {
      alert('Invalid email or password');
    }
  };

    // set the header title to an empty string to remove the title
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: '',
        });
      }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Log In</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signupText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Roboto',
    fontSize: 40,
    color: '#000000',
    marginBottom: 32,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    height: 48,
    marginBottom: 16,
    justifyContent: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  inputText: {
    height: 48,
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#0047AB',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginText: {
    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  icon: {
    marginRight: 8,
  },
});
