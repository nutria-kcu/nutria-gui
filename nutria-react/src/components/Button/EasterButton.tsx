import React from 'react';
import { Button, ButtonProps, PressEvent } from '@heroui/react';
import confetti from 'canvas-confetti';
import crosshair from '../../assets/red-crosshair.png';

const EasterButton: React.FC<ButtonProps> = (props) => {
	const handleConfetti = (e: PressEvent) => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.85 },
		});
		props.onPress?.(e);
	};

	return (
		<Button
			disableRipple
			onPress={handleConfetti}
			size="lg"
			className="p-4 bg-transparent shadow-none hover:scale-110 transition-transform"
		>
			<img
				src={crosshair}
				alt="Crosshair Button"
				className="w-14 h-14 p-1"
			/>
		</Button>
	);
};

export default EasterButton;
