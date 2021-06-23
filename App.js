import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Images} from './src/theme/images';
import {Icon} from 'react-native-elements';
import Snap from './src/components/snapImages';
import {strings} from './src/theme/text';
import {styles} from './src/styles/styles';

const _snapArray = [
  {
    imgName: Images.angars,
    foodName: strings.streetAngars,
    time: strings.ore6,
  },
  {
    imgName: Images.circus,
    foodName: strings.streetCircus,
    time: strings.ore5,
  },
  {
    imgName: Images.israeli,
    foodName: strings.streetIsraeli,
    time: strings.ore4,
  },
];
export default App = () => {
  const goToFirst = () => {
    scroll.scrollTo({x: 0, y: 0, animated: true});
  };
  const goToSecond = () => {
    scroll.scrollTo({x: 360, y: 0, animated: true});
  };
  const goToLast = () => {
    scroll.scrollTo({x: 720, y: 0, animated: true});
  };
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => {
    setToggle(!toggle ? 'gray' : 'black');
  };
  return (
    <View>
      <ScrollView
        ref={c => {
          scroll = c;
        }}
        contentContainerStyle={{padding: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={360}
        snapToAlignment={'center'}>
        {_snapArray.map((x, index) => (
          <Snap
            key={index}
            imgName={x.imgName}
            foodName={x.foodName}
            time={x.time}
          />
        ))}
      </ScrollView>
      <View style={styles.pages}>
        <TouchableOpacity style={styles.circle} onPress={goToFirst}>
          <Icon
            name="circle"
            type="font-awesome"
            size={10}
            color={toggle ? 'gray' : 'black'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={goToSecond}>
          <Icon
            name="circle"
            type="font-awesome"
            size={10}
            color={toggle ? 'gray' : 'black'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={goToLast}>
          <Icon
            name="circle"
            type="font-awesome"
            size={10}
            color={toggle ? 'gray' : 'black'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
