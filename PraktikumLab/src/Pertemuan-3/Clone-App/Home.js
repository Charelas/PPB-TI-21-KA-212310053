import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Stories from './widgets/Stories';
import Post from './widgets/Post';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent={true} backgroundColor='black' barStyle = 'light-content' />
        <View style={styles.container1}>
          <Image source={require('../../../assets/icons/icon-ig-text.png')} style={styles.img_ig} />
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome5 name={'heart'} size={25} color={'white'} style={{ paddingHorizontal: 10 }} />
            <FontAwesome5 name={'paper-plane'} size={25} color={'white'} />
          </View>
        </View>
        <View style={styles.container2}>
          <ScrollView>
            <Stories />
            <Post />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container1: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  container2: {
    flex: 12,
  },
});
