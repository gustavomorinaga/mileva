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
			p="5"
			bgColor="darkBlue.500"
			h="32"
			roundedBottomLeft="3xl"
			{...containerStyle}
		>
			{children}
		</Box>
	);
}
