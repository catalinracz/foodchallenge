import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from '../styles/styles';

const Snap = ({imgName, foodName, time}) => {
  const [toggle, setToggle] = useState(true);
  var counter = 50
  const toggleFunction = () => {
    setToggle(!toggle);
  };
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={imgName} imageStyle={{ borderRadius: 10}}>
        <View style={styles.likes}>
        <TouchableOpacity onPress={() => toggleFunction()}>
          <Icon name="heart-outline" type='ionicon' size={18} color={toggle ? 'white' : 'hotpink'}>
          {toggle ? null : counter++}
          </Icon>
        </TouchableOpacity>
        <Text style={styles.counter}>{counter}</Text>
        </View>
      </ImageBackground>
      <Text style={styles.foodText}>{foodName}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

export default Snap;
