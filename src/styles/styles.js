import { StyleSheet } from 'react-native';

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
    width: 320,
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