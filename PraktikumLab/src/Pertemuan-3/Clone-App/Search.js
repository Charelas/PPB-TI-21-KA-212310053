import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Clone-App/Friends/widgets/SearchBar';
import Users from '../Clone-App/const-data/ObjDummies';
import ExpSectionList from '../Clone-App/Friends/widgets/ExpSectionList';

export class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.body}>
          <ExpSectionList Users={Users} />
        </View>
      </SafeAreaView>
    );
  }
}

export default MyFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  body: {
    flex: 10,
    backgroundColor: 'black',
  },
});
