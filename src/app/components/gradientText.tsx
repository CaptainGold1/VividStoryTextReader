

export default function GradientText(
	{children, colors}:
	{children: React.ReactNode, colors: string[]}
) {
	const colorsString = colors.join(", ");

	return (
		<span
			style={{
				backgroundImage: `linear-gradient(to right, ${colorsString})`,
				backgroundClip: "text",
			}}
			className="text-transparent"
		>
			{children}
		</span>
	)
}