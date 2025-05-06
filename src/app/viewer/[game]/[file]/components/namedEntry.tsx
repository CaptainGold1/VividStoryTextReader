

export default function NamedEntry({name, text, nameColor} : {name: string, text: string, nameColor: string}) {
	if (!nameColor || nameColor === "") {
		nameColor = "oklch(70.5% 0.015 286.067)"
	}

	return (
		<div className="flex grow justify-center gap-2 ">
			<div
				className="grow-1 rounded-md px-2 py-1 text-lg text-right basis-80 font-inter font-bold"
				style={{color: nameColor}}
			>{name}</div>
			<div className="grow-4 text-lg py-1 px-2 basis-320 font-inter">{text}</div>
		</div>
	)
}