import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'native-base';

export const BaseScreenPrimitive = ({ children }) => (
	<SafeAreaView>
		<View padding="5">{children}</View>
	</SafeAreaView>
);

export default function BaseScreen({ children, isAnimated = true }) {
	const animation = React.useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(animation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
		}).start();

		return () => {
			Animated.timing(animation, {
				toValue: 0,
				duration: 250,
				useNativeDriver: true,
			}).start();
		};
	}, [animation, isAnimated]);

	return (
		<>
			{isAnimated ? (
				<Animated.View style={{ flex: 1, opacity: animation }}>
					<BaseScreenPrimitive>{children}</BaseScreenPrimitive>
				</Animated.View>
			) : (
				<BaseScreenPrimitive>{children}</BaseScreenPrimitive>
			)}
		</>
	);
}
