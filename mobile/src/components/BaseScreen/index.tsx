import React from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'native-base';

export default function BaseScreen({ children }) {
	return (
		<SafeAreaView>
			<View padding="5">{children}</View>
		</SafeAreaView>
	);
}
