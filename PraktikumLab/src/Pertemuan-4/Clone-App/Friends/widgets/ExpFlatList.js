import { FlatList } from 'react-native';
import React from 'react';
import UserItem from '../widgets/UserItem';

const ExpFlatList = ({Users}) => {
  return (<FlatList data={Users} horizontal={true} keyExtractor={(item) => item.id} renderItem={({ item }) => <UserItem item={item} />} />
  )
};

export default ExpFlatList
