import React, {useState} from 'react';
import {View, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
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
  const [offsetx, setOffsetX] = useState(0);
  const windowWidth = parseInt(Dimensions.get('screen').width);
  const goToFirst = () => {
    scroll.scrollTo({x: 0, y: 0, animated: true});
  };
  const goToSecond = () => {
    scroll.scrollTo({x: windowWidth-21, y: 0, animated: true});
  };
  const goToLast = () => {
    scroll.scrollTo({x: (windowWidth-21)*2, y: 0, animated: true});
  };
  console.log(offsetx);
  console.log(windowWidth)
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
        pagingEnabled={true}
        snapToInterval={windowWidth-21}
        snapToAlignment={'center'}
        onScroll={(event) => {
          setOffsetX(parseInt(event.nativeEvent.contentOffset.x))
        }}
        >
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
            color={offsetx==0 ? 'black' : 'gray'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={goToSecond}>
          <Icon
            name="circle"
            type="font-awesome"
            size={10}
            color={offsetx==windowWidth-21 ? 'black' : 'gray'}></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circle} onPress={goToLast}>
          <Icon
            name="circle"
            type="font-awesome"
            size={10}
            color={offsetx>windowWidth-21 ? 'black' : 'gray'}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};
