import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

// --- Native-Base ---
import { View } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

interface IBaseScreenProps extends IViewProps {
	isAnimated?: boolean;
	scrollEnabled?: boolean;
}

export const BaseScreenPrimitive = ({ children, ...props }: IViewProps) => (
	<SafeAreaView style={{ zIndex: 99, flex: 1 }}>
		<View px="5" flex={1} {...props}>
			{children}
		</View>
	</SafeAreaView>
);

export default function BaseScreen({
	children,
	isAnimated = true,
	scrollEnabled = false,
	...props
}: IBaseScreenProps) {
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
		<View flex={1} zIndex={9} bgColor={props.bgColor ?? 'warmGray.100'}>
			<Animated.View
				style={{
					flex: 1,
					zIndex: 10,
					...(isAnimated && {
						opacity: fadeAnimation,
						transform: [{ translateY: slideTopAnimation }],
					}),
				}}
			>
				<BaseScreenPrimitive {...props}>{children}</BaseScreenPrimitive>
			</Animated.View>
		</View>
	);
}
