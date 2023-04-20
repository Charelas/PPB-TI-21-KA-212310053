import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            merk:"Toyota",
            types:{type:"Automatic", model:"Calya ADS"}
        }
    }
    render () {
        return (
            <View>
                <Text>Hi i'm a Car</Text>
                <Text>Merk: {this.state.merk}</Text>
                <Text>Type: {this.state.types.type}</Text>
                <Text>Model: {this.state.types.model}</Text>
            </View>
        )
    }
}

export default Car