import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: Colors.White,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  title: {
    fontSize: 25,
    color: Colors.White,
    zIndex: 10,
    marginLeft: 20,
  },
  radium: {
    color: Colors.GreenPrimary,
    fontWeight: 'bold',
  },
  rocket: {
    color: Colors.GreenSecondary,
  },
  loginButton: {
    paddingTop: 20,
  },
});

export default styles;
