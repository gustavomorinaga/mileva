import { Dimensions } from 'react-native';

const avoidKeyboardView = {
	w: Dimensions.get('window').width,
	h: Dimensions.get('window').height,
};

export default avoidKeyboardView;
