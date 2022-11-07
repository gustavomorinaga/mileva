import React from 'react';

// --- Native-Base ---
import { Box } from 'native-base';

interface HeaderProps {
	children?: React.ReactElement;
}

export default function HeaderComponent({ children }: HeaderProps) {
	return (
		<Box zIndex={-9} p="4" bgColor="darkBlue.500" h="32" roundedBottomLeft="3xl">
			{children}
		</Box>
	);
}
