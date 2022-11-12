import React from 'react';

// --- Native-Base ---
import { Box, IBoxProps } from 'native-base';

interface HeaderProps {
	containerStyle?: IBoxProps;
	children?: React.ReactElement;
}

export default function HeaderComponent({ containerStyle, children }: HeaderProps) {
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
			{children}
		</Box>
	);
}
