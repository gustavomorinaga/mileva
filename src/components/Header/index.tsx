import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

// --- Native-Base ---
import { Box, IBoxProps } from 'native-base';

interface HeaderProps {
	containerStyle?: IBoxProps;
	children?: React.ReactElement;
	isAnimated?: boolean;
}

export default function HeaderComponent({
	containerStyle,
	children,
	isAnimated = true,
}: HeaderProps) {
	const fadeAnimation = React.useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnimation, {
			toValue: 1,
			duration: 500,
			useNativeDriver: true,
			easing: Easing.in(Easing.ease),
		}).start();

		return () => {
			Animated.timing(fadeAnimation, {
				toValue: 0,
				duration: 250,
				useNativeDriver: true,
				easing: Easing.ease,
			}).start();
		};
	}, [fadeAnimation]);

	return (
		<Box
			zIndex={-9}
			w="full"
			pt="10"
			px="5"
			pb="16"
			bgColor="darkBlue.500"
			roundedBottomLeft="3xl"
			{...containerStyle}
		>
			<Animated.View
				style={{
					...(isAnimated && {
						opacity: fadeAnimation,
					}),
				}}
			>
				{children}
			</Animated.View>
		</Box>
	);
}
