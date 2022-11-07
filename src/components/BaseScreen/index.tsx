import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { View } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

export const BaseScreenPrimitive = ({ ...props }: IViewProps) => (
	<SafeAreaView style={{ zIndex: 99, flex: 1, marginTop: 4 }}>
		<View pt="5" px="5" flex={1} {...props}></View>
	</SafeAreaView>
);

export default function BaseScreen({
	children,
	isAnimated = true,
	...props
}: IViewProps & { isAnimated?: boolean }) {
	const fadeAnimation = React.useRef(new Animated.Value(0)).current;
	const slideTopAnimation = React.useRef(new Animated.Value(50)).current;

	useEffect(() => {
		Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.in(Easing.ease),
		}).start();

		Animated.timing(slideTopAnimation, {
			toValue: 0,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.inOut(Easing.ease),
		}).start();

		return () => {
			Animated.timing(fadeAnimation, {
				toValue: 0,
				duration: 250,
				useNativeDriver: true,
				easing: Easing.ease,
			}).start();

			Animated.timing(slideTopAnimation, {
				toValue: 50,
				duration: 250,
				useNativeDriver: true,
				easing: Easing.ease,
			}).start();
		};
	}, [fadeAnimation, slideTopAnimation, isAnimated]);

	return (
		<View flex={1} zIndex={9} bgColor="muted.100">
			{isAnimated ? (
				<Animated.View
					style={{
						flex: 1,
						opacity: fadeAnimation,
						transform: [{ translateY: slideTopAnimation }],
						zIndex: 10,
					}}
				>
					<BaseScreenPrimitive {...props}>{children}</BaseScreenPrimitive>
				</Animated.View>
			) : (
				<BaseScreenPrimitive {...props}>{children}</BaseScreenPrimitive>
			)}
		</View>
	);
}
