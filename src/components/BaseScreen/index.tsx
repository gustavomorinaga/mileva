import React, { useEffect } from 'react';
import { Animated } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { View } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

export const BaseScreenPrimitive = ({
	children,
	isOnAppContent = false,
	...props
}: IViewProps & { isOnAppContent?: boolean }) => (
	<SafeAreaView style={{ flex: 1, marginTop: isOnAppContent ? 4 : 0 }}>
		<View padding="5" h="full" {...props} mt={isOnAppContent ? -12 : 0}>
			{children}
		</View>
	</SafeAreaView>
);

export default function BaseScreen({
	children,
	isAnimated = true,
	isOnAppContent = false,
	...props
}: IViewProps & { isAnimated?: boolean; isOnAppContent?: boolean }) {
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
				<Animated.View style={{ flex: 1, opacity: animation, zIndex: 10 }}>
					<BaseScreenPrimitive {...props} isOnAppContent={isOnAppContent}>
						{children}
					</BaseScreenPrimitive>
				</Animated.View>
			) : (
				<BaseScreenPrimitive {...props} isOnAppContent={isOnAppContent}>
					{children}
				</BaseScreenPrimitive>
			)}
		</>
	);
}
