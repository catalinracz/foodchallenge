import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('screen').width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  likes: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    padding: 5
  },
  counter: {
    color: 'white',
    fontWeight: 'bold'
  },
  pinkHeart: {
    color: 'pink'
  },
  whiteHeart: {
    color: 'white'
  },
  image: {
    width: windowWidth-60,
    height: 200
  },
  foodText: {
    fontWeight: 'bold'
  },
  timeText: {
    color: 'gray'
  },
  pages: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  circle: {
    marginRight: 3
  }
})