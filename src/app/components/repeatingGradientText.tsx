import { ReactNode } from "react";

export default function RepeatingGradientText(
	{children, colors, size}:
	{children: ReactNode, colors: string[], size: number}
) {
	let colorsString = "";
	for (let i = 0; i < colors.length; i++) {
		colorsString += `${colors[i]} ${i * size}px, `;
	}
	colorsString += `${colors[0]} ${size * colors.length}px`;

	return (
		<span
			style={{
				backgroundImage: `repeating-linear-gradient(to right, ${colorsString})`,
				backgroundClip: "text",
			}}
			className="text-transparent"
		>
			{children}
		</span>
	)
}