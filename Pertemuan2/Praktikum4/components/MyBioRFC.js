import React, { useState } from 'react';
import { View, Text } from 'react-native';

const MyBioRFC = () => {
    const [identity] = useState({
        npm: 212310053,
        firstname: 'EMANUEL CHAREL',
        middlename: 'ALESSANDO',
        lastname: 'SOGE',
    });

    const [educations] = useState([
        {id:1, school: 'SDN 3 Citayam'},
        {id:2, school: 'SMP Kasih Depok'},
        {id:3, school: 'SMK Bangun Nusa Bangsa Cibinong'},
    ]);

    const [mobile_phone] = useState(6281319070772);
    const [email] = useState('212310053@student.ibik.ac.id');
    const [gender] = useState('Male');
    const [tall_body] = useState(170);
    const [weight] = useState(64);

    return (
        <View>
            <Text style={{fontWeight: 'bold',textAlign: 'center'}}>Hi this is My Biodata (RFC)</Text>
            <Text>NPM: {identity.npm}</Text>
            <Text>Full Name: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
            <Text>List of Educations: </Text>
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
};

export default MyBioRFC;

