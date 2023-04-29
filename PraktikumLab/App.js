import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import InstagramClone from './src/Pertemuan-3/Clone-App/InstagramClone';
import InstagramClone from './src/Pertemuan-4/Clone-App/InstagramClone';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <InstagramClone />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
