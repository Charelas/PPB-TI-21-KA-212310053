import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const PostInfo = [
    {   postTitle: 'Ferdy',
        postPersonImage: require('../../../../assets/icons/icon-boy-2.png'),
        postImage: require('../../../../assets/image/post-1.jpg'), 
        likes: 700,
        isLiked: false 
    },

    {   postTitle: 'Zaki',
        postPersonImage: require('../../../../assets/icons/icon-boy-1.png'),
        postImage: require('../../../../assets/image/post-2.jpg'), 
        likes: 729,
        isLiked: false 
    },

    {   postTitle: 'Fariz',
        postPersonImage: require('../../../../assets/icons/icon-orang.png'),
        postImage: require('../../../../assets/image/post-3.jpg'), 
        likes: 10,
        isLiked: false 
    },

    {   postTitle: 'Melani',
        postPersonImage: require('../../../../assets/icons/icon-girl-1.png'),
        postImage: require('../../../../assets/image/post-4.jpg'), 
        likes: 80,
        isLiked: false 
    },

    {   postTitle: 'Sptwnprt',
        postPersonImage: require('../../../../assets/icons/icon-orang.png'),
        postImage: require('../../../../assets/image/post-5.jpg'), 
        likes: 100,
        isLiked: false 
    },

    {   postTitle: 'Charel_as',
        postPersonImage: require('../../../../assets/icons/icon-orang.png'),
        postImage: require('../../../../assets/image/post-6.jpg'), 
        likes: 330,
        isLiked: false 
    },

    {   postTitle: 'Firdaus',
        postPersonImage: require('../../../../assets/icons/icon-orang.png'),
        postImage: require('../../../../assets/image/post-7.jpg'), 
        likes: 1000,
        isLiked: false 
    },

    ];

  return (
    <View>
      {PostInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingTop: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={data.postPersonImage}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
                <View style={{ paddingLeft: 5 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>{data.postTitle}</Text>
                </View>
              </View>
              <Feather name="more-vertical" style={{ fontSize: 20, color: '#fff' }} />
            </View>
            <View>
              <Image source={data.postImage} style={{ width: '100%', height: 400 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign name={like ? 'heart' : 'hearto'} style={{ paddingRight: 10, fontSize: 20, color: like ? 'red' : 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic name="ios-chatbubble-outline" style={{ fontSize: 20, paddingRight: 10, color: 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" style={{ fontSize: 20, paddingRight: 10, color: 'white' }} />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{ fontSize: 20, color: 'white' }} />
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={{ color: 'white' }}>
                Liked by {like ? 'you and' : ''} {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text style={{ fontWeight: '400', fontSize: 14, paddingVertical: 2, color: 'white' }}>If you like this photo, Please like press like button and thanks</Text>
              <Text style={{ opacity: 0.4, paddingVertical: 2, color: "white"}}>
                View all comment
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment "
                    style={{opacity: 1, color: "white"}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
