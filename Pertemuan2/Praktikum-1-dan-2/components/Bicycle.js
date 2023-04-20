import { View, Text } from "react-native";
import React from "react";

function  Bicycle() {
    const city = "South West";
    const peoples = [{name:"Erdiana", fams:"Sister"},
                    {name:"Emanuel", fams:"Brother"},] 
    return (
        <View>
            <Text>Hi i'm a Bicycle</Text>
            <TakeARide peoples={peoples} />
            {Place2Go(city)}
        </View>
    );
}

export default Bicycle;
const TakeARide = ({peoples}) => {
    return (
        <View>
            <Text>Let's go ridding with us:</Text>
            {peoples.map((v,index)=>(
                <View key={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View> 
    )    
};

function Place2Go (value) {
    return <Text>We're going to {value} now, come on.</Text>;
}