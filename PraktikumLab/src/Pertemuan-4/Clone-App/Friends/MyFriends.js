import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from './widgets/SearchBar';
import ExpScrollView from './widgets/ExpScrollView';
import Users from '../const-data/ObjDummies';
import ExpFlatList from './widgets/ExpFlatList';
import ExpSectionList from './widgets/ExpSectionList';

export class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <SearchBar />
        </View>
        <View style={styles.body}>
          <ExpFlatList Users={Users} />
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
