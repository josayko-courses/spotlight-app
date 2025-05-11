import { StyleSheet } from 'react-native';

const $red = '#FF0000';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: $red,
    fontSize: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
});
