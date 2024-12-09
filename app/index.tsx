import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [isLoginScreen, setIsLoginScreen] = useState(true);  // State untuk menentukan layar aktif

  // Fungsi untuk menangani Login
  const handleLogin = () => {
    Alert.alert('Berhasil', 'Login Berhasil!');
  };

  // Fungsi untuk menangani Register
  const handleRegister = () => {
    Alert.alert('Berhasil', 'Akun Anda berhasil dibuat!');
  };

  return (
    <View style={styles.container}>
      {isLoginScreen ? (
        // Tampilan Login
        <View style={styles.screen}>
          <Text style={styles.title}>Masuk</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Kata Sandi"
            secureTextEntry
          />

          <TouchableOpacity
          onPress={() => {
            router.push("/menu")
          }}
          style={styles.button}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>

          <View style={styles.switchScreen}>
            <Text>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => setIsLoginScreen(false)}>
              <Text style={styles.switchText}>Daftar di sini</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        // Tampilan Register
        <View style={styles.screen}>
          <Text style={styles.title}>Daftar</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Kata Sandi"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Konfirmasi Kata Sandi"
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>

          <View style={styles.switchScreen}>
            <Text>Sudah punya akun? </Text>
            <TouchableOpacity onPress={() => setIsLoginScreen(true)}>
              <Text style={styles.switchText}>Masuk di sini</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  switchText: {
    color: '#007BFF',
  },
});

export default App;
