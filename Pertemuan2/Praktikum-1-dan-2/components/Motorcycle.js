import React from 'react';
import { View, Text} from 'react-native';


var name = "Honda";
const Motorcycle = () => {
  return (
    <View>
      <Text>Hi I'm a Motorcycle</Text>
      <Text>Merek: {name}</Text>
      <Text>Type: {types.type}</Text>
      <Text>Model: {types.model}</Text>
      <Text>Harga: {types.harga}</Text>
    </View>
  );
};

export default Motorcycle;

const types = {type:"Matic", model:"Vario", harga:15000};