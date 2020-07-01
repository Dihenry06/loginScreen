import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import logo from './assets/logo.png'

function App() {
  return (
    <KeyboardAvoidingView
    behavior={
      Platform.OS === 'ios' ? 'padding' : null
    } 
    style={styles.container}>

      <View style={styles.containerLogo}>
        <Image source={logo} />
      </View>

      <View style={styles.containerInput}>

        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor={'grey'}
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor={'grey'}
          onChangeText={() => { }}
        />

        <TouchableOpacity style={styles.buttonSubmit}>
          <Text style={styles.textButtonSubmit}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSign}>
          <Text style={styles.textButtonSign}>Criar conta?</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  containerInput: {
    marginTop:-100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    height: 50,
    padding: 10,
  },
  buttonSubmit: {
    margin : 10,
    backgroundColor: '#35aaff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignItems: 'center'
  },
  buttonSign: {
    backgroundColor: '#35aaff',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    alignItems: 'center'
  },
  textButtonSubmit: {
    color: '#fff',
    fontSize:18
  },
  textButtonSign: {
    color: '#fff',
    fontSize:18
  }
});

export default App;
