import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Typograph = () => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderColor: 'black',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      backgroundColor: 'brown',
      color: '#fff',
      textAlign: 'center',
      textDecorationLine: 'underline',
      padding: 10,
    },
    paragraph: {
      fontSize: 18,
      textAlign: 'justify',
      paddingBottom: 30,
    },
    redText: {
      color: 'red',
    },
    image: {
      width: 100,
      height: 100,
    },
    boldText: {
      fontWeight: 'bold',
    },
    italicText: {
      fontStyle: 'italic',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>History of Bicycle</Text>
      <Text style={styles.paragraph}>
        A bicyle, also called a<Text style={[styles.paragraph, styles.redText]}> pedal cycle</Text>,<Text style={[styles.paragraph, styles.boldText]}> bike</Text>,
        <Text style={[styles.paragraph, styles.italicText]}> push-biker or cycle</Text>, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attaced to a frame, one behind the other. A bicycle
        ride is called a cyclist, or bicyclist.
      </Text>
    </View>

    
  );
};

const ContainerComponent = () => {
  return (
    <View>
      {/* Render Typograph component */}
      <Typograph />
      {/* Add your additional container below */}
      <View style={styles.imageContainer}>
        <View style={styles.imageContainer1}>
          <View style={styles.imageConatiner2}>
            <Image style={styles.image}
              source={require('../stylesheets/icon-orang.png')}/>
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer:{
    alignItems: 'center',
  },
  imageContainer1: {
    padding: 25,
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  imageConatiner2: {
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default ContainerComponent;
