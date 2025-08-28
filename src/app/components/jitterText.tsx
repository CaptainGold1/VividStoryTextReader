import {ReactNode} from "react";

export default function JitterText(
	{text} :
	{text: string}
) {
	const wordArray = text.split(" ")

	return (
		<>
			{
				wordArray.map((word, index) => {
					if (index < wordArray.length - 1) word += " "
					const stringArray = word.split("");

					return (<span
						className="*:inline-block inline-block"
						key={index}
					>{
						stringArray.map((char, i) => {
							let checkedChar: ReactNode = char;
							if (char == " ") checkedChar = <>&nbsp;</>;
							return <span
								style={{
									animationDelay: ((i * -0.11) + "s"),
									animation: "jitter infinite " + (Math.random() * 0.25 + 0.25  + "s")
								}}
								key = {i}
								suppressHydrationWarning={true}
							>{checkedChar}</span>
						})
					}</span>)
				})
			}

		</>
	)
}