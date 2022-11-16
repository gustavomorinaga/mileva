import React from 'react';

// --- Native-Base ---
import { Badge, IBadgeProps, IconButton, IIconButtonProps, View } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ISizes } from 'native-base/lib/typescript/theme/base/sizes';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

const DEFAULT_BADGE_SPACING = 10;

const badgePositions = {
	'top-left': { top: -DEFAULT_BADGE_SPACING, left: -DEFAULT_BADGE_SPACING },
	'top-right': { top: -DEFAULT_BADGE_SPACING, right: -DEFAULT_BADGE_SPACING },
	'bottom-left': { bottom: -DEFAULT_BADGE_SPACING, left: -DEFAULT_BADGE_SPACING },
	'bottom-right': { bottom: -DEFAULT_BADGE_SPACING, right: -DEFAULT_BADGE_SPACING },
};

interface CustomIconButtonProps extends IIconButtonProps {
	name: keyof typeof Ionicons.glyphMap;
	color?: ColorType;
	iconSize?: ISizes;
	badge?: React.ReactElement | React.ReactNode;
	badgeProps?: IBadgeProps & {
		position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	};
	triggerProps?: (
		_props: any,
		state: {
			open: boolean;
		}
	) => React.ReactElement;
}

export default function IconButtonComponent(props: CustomIconButtonProps) {
	return (
		<View position="relative">
			<IconButton
				rounded="xl"
				_icon={{
					as: Ionicons,
					name: props.name,
					color: props.color ?? 'black',
					size: props.iconSize ?? 'md',
				}}
				{...props}
				{...props.triggerProps}
			/>

			{props.badge && (
				<View
					position="absolute"
					flex={1}
					pointerEvents="none"
					{...badgePositions[props?.badgeProps?.position ?? 'top-right']}
				>
					<Badge
						variant="solid"
						colorScheme="danger"
						rounded="full"
						{...props.badgeProps}
					>
						{props.badge}
					</Badge>
				</View>
			)}
		</View>
	);
}
