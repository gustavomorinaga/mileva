import React from 'react';

// --- Native-Base ---
import { Box } from 'native-base';

export default function HeaderComponent({ children }) {
	return (
		<Box bgColor="darkBlue.500" h="24" roundedBottomLeft="3xl">
			{children}
		</Box>
	);
}
