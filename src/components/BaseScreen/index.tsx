import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

// --- Native-Base ---
import { Box, View } from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

export const BaseScreenPrimitive = ({ children, ...props }: IViewProps) => (
	<Box px="5" flex={1} safeArea {...props}>
		{children}
	</Box>
);

interface IBaseScreenProps extends IViewProps {
	isAnimated?: boolean;
	scrollEnabled?: boolean;
}

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
