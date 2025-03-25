import React, { useState } from 'react';
import { Button, ButtonProps } from '@heroui/react';
import confetti from 'canvas-confetti';

const EasterButton = (props: ButtonProps) => {

	const handleConfetti = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.85 }
		});
	};

	return (
		<Button
			disableRipple
			className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-pink-500/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-pink-500/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
			size="lg"
			onPress={handleConfetti}
		>
			🎉🎉🎉🎉
		</Button>
	);
};

export default EasterButton;
