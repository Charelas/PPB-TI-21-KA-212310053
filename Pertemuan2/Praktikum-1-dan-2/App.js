import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Typograph from './components/stylesheets/Items';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Typograph />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 18,
    textAlign: 'justify',
  },
  container: {
    padding: 100,
    flex: 1,
    justifyContent: "center"
  },
});
