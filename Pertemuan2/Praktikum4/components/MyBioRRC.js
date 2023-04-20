import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class MyBioRRC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: {
        npm: 212310053,
        firstname: 'EMANUEL CHAREL',
        middlename: 'ALESSANDO',
        lastname: 'SOGE',
      },

      educations: [
        {id:1, school: 'SDN 3 Citayam'},
        {id:2, school: 'SMP Kasih Depok'},
        {id:3, school: 'SMK Bangun Nusa Bangsa Cibinong'},
      ],

      mobile_phone: '6281319070772',
      email: '212310053@student.ibik.ac.id',
      gender: 'Male',
      tall_body: 170,
      weight: 64
    };
  }

  render() {
    const {identity, educations, mobile_phone, email, gender, tall_body, weight} = this.state;
    return (
      <View>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}> Hi this is My Biodata (RRC) </Text>
        <Text>NPM: {identity.npm}</Text>
        <Text>Full Name: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
        <Text>List of Educations:</Text>
        {educations.map(educations => (
          <Text>{educations.id}. {educations.school}</Text>
        ))}
        <Text>Phone Number: {mobile_phone}</Text>
        <Text>Email Address: {email}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Tall Body: {tall_body} cm</Text>
        <Text>Weight: {weight} kg</Text>
      </View>
    );
  }
}

export default MyBioRRC;
