import {createCanvas} from "canvas";
import {ReactNode} from "react";

const canvas = createCanvas(200, 200);

function getCharWidth(text: string) {
	const context = canvas.getContext('2d');

	if (context) {
		context.font = "inter 18px";
		return context.measureText(text).width;
	} else {
		return 0;
	}
}


export default function WaveText(
	{text} :
	{text: string}
) {
	let xPos = 0;
	const enSize = getCharWidth("n");

	const wordArray = text.split(" ")

	return (
		<>
			{
				wordArray.map((word, index) => {
					if (index < wordArray.length - 1) word += " "
					const stringArray = word.split("");

					return (<span className="*:inline-block *:animate-wave inline-block" key={index}>{
						stringArray.map((char, i) => {
							let checkedChar: ReactNode = char;
							if (char == " ") checkedChar = <>&nbsp; </>;
							const width = getCharWidth(char);
							// console.log(char + " " + getCharWidth(char));
							xPos += width;

							return <span
								style={{
									animationDelay: ((xPos/enSize * -0.1) + "s")
								}}
								key = {i}
							>{checkedChar}</span>
						})
					}</span>)
				})
			}
		</>
	)
}