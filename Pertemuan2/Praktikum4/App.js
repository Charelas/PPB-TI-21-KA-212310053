import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyBioRFC from './components/MyBioRFC';
import MyBioRRC from './components/MyBioRRC';

export default function App() {
  return (
    <View>
      <MyBioRFC />
      <MyBioRRC />
      <StatusBar hidden={true} />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
