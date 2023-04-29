import React from 'react';
import { Text, SectionList } from 'react-native';
import UserItem from './UserItem';

const ExpSectionList = ({Users}) => {
  const data = [
    { title: 'Suggested', data: Users },
    { title: 'Followers', data: Users },
  ];
  return (<SectionList sections={data}
                       renderItem={({item}) => <UserItem item={item} /> }
                       renderSectionHeader={({section: {title}}) => (
                        <Text style={{color: 'white', paddingHorizontal: 10,}}>{title}</Text>
                       )} />
  );
};


export default ExpSectionList