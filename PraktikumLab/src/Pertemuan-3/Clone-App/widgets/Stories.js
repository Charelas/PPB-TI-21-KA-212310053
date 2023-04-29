import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {

    const storyInfo = [
        {
        id: 1,
        name: 'Your Story',
        image: require('../../../../assets/icons/icon-orang.png')
        },

        {
        id: 2,
        name: 'Zaki',
        image: require('../../../../assets/icons/icon-boy-1.png')
        },

        {
        id: 3,
        name: 'Ferdy',
        image: require('../../../../assets/icons/icon-boy-2.png')
        },

        {
        id: 4,
        name: 'Fariz',
        image: require('../../../../assets/icons/icon-orang.png')
        },

        {
        id: 5,
        name: 'Melani',
        image: require('../../../../assets/icons/icon-girl-1.png')
        },
        
        {
        id: 6,
        name: 'Firdaus',
        image: require('../../../../assets/icons/icon-orang.png')
        },

        {
        id: 7,
        name: 'Sptwnprt',
        image: require('../../../../assets/icons/icon-orang.png')
        },
    ]

    return (
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator={false} 
        style={{paddingVertical: 20}}> 
            {storyInfo.map((data, index) => {
                    return (
                      <TouchableOpacity key={index}>
                        <View 
                          style={{
                             flexDirection: 'column',
                             paddingHorizontal: 8,
                             position: 'relative',
                            }}>
                           {data.id == 1 ?(
                             <View 
                                style={{
                                    position: 'absolute',
                                    bottom: 25,
                                    right: 10,
                                    zIndex: 1,
                                }}>
                                <Entypo 
                                  name='circle-with-plus' 
                                  style={{
                                     fontSize: 25, 
                                     color: '#405de6', 
                                     backgroundColor: 'white', 
                                     borderRadius: 100,
                                    }} 
                                    />
                                </View>
                            ) : null}
                            <View 
                                style={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: 'white', 
                                    borderWidth: 3, 
                                    borderRadius: 100,
                                    borderColor: '#c13584',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                               <Image 
                                 source={data.image} 
                                 style={{
                                      resizeMode: 'cover',
                                      width: '92%',
                                      height: '92%',
                                      borderRadius: 100,
                                      backgroundColor: 'orange',
                                    }} 
                                /> 
                            </View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: 12,
                                }}>{data.name}</Text>
                        </View>
                       </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    );
};

export default Stories