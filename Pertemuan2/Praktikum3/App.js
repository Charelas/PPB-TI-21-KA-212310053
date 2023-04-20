import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={require('./assets/icons/icon-ibik.png')} />          
      </View>
      <View style={styles.containerText}>
        <Text style={{color: '#fff'}}>Loading...</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    flex: 6,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 70,
    height: 70,
  },
  containerText: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
  },
});
