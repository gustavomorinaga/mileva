import React from 'react';

// --- Native-Base ---
import {
	Box,
	Divider,
	Heading,
	IBoxProps,
	IHeadingProps,
	Image,
	IPressableProps,
	Pressable,
	Stack,
	View,
} from 'native-base';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

interface ICardProps {
	children?: React.ReactElement;
	containerProps?: IBoxProps;
	image?: {
		uri: string;
		alt: string;
	};
	onPress?: IPressableProps['onPress'];
}

export default function Card(props?: ICardProps) {
	return (
		<Pressable onPress={props.onPress}>
			<Box
				overflow="hidden"
				bgColor="white"
				borderRadius="2xl"
				shadow="5"
				{...props.containerProps}
			>
				{props.image && (
					<Image
						source={{ uri: props.image.uri }}
						alt={props.image.alt}
						width="full"
						height="40"
						alignSelf="stretch"
						resizeMode="cover"
					/>
				)}

				{props.children}
			</Box>
		</Pressable>
	);
}

Card.Content = function CardContent({ children, ...props }: IViewProps) {
	return (
		<View p="4" {...props}>
			<Stack space="4">{children}</Stack>
		</View>
	);
};

Card.Header = function CardHeader({
	title,
	...props
}: IHeadingProps & { title: string }) {
	return (
		<Heading fontSize="lg" {...props}>
			{title}
		</Heading>
	);
};

Card.Body = function CardBody({ children, ...props }: IViewProps) {
	return <View {...props}>{children}</View>;
};

Card.Footer = function CardFooter({ children, ...props }: IViewProps) {
	return (
		<View {...props}>
			<Divider mb="2" />

			{children}
		</View>
	);
};
