import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 10, justifyContent: 'center', width: '90%', alignItems: 'center'}}>
        <View style={styles.logo}>
          <Image source={require('../../../assets/icons/insta-logo.png')} style={{ width: 60, height: 60 }} />
        </View>
        <TextInput style={styles.input} placeholder="Username,email or mobile number" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 10 }} onPress={handleSignIn}>
          <Text style={{ textAlign: 'center' }}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, width: '90%', justifyContent: 'space-between', alignItems: 'flex-end',}}>
        <TouchableOpacity style={{ width: '100%', borderWidth: 1, borderColor: '#007AFF', borderRadius: 5 }} onPress={handleSignIn}>
          <Text style={{ textAlign: 'center', color: '#007AFF', fontSize: 16, fontWeight: 500, padding: 10 }}>Create new account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 100,
  },
  input: {
    width: '100%',
    height: 60,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
