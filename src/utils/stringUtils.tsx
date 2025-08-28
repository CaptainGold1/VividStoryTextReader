import RepeatingGradientText from "@/app/components/repeatingGradientText";
import {ReactNode} from "react";
import JitterText from "@/app/components/jitterText";
import WaveText from "@/app/components/waveText";


export function colorText(toColor: string, textColors: {[key: string]: string | string[]}) {
	const foundIndex = toColor.indexOf("`c{");
	if (foundIndex === -1) return <>{toColor}</>;

	const endIndex = toColor.indexOf("}");
	const colorCode = toColor.substring(foundIndex + 3, endIndex);

	// console.log(colorText);
	// console.log(textColors[colorText]);

	const initPart = toColor.substring(0, foundIndex);
	const trimmedString = toColor.substring(endIndex + 1);

	if (textColors[colorCode]) {
		const textColor = textColors[colorCode];
		if (Array.isArray(textColor)) {
			return <>
				<span>{initPart}</span>
				<RepeatingGradientText colors={textColor} size={100}>{colorText(trimmedString, textColors)}</RepeatingGradientText>
			</>
		} else {
			return <><span>{initPart}</span><span style={{
				color: textColor
			}}>{colorText(trimmedString, textColors)}</span></>
		}
	} else {
		return <>{initPart + trimmedString}</>
	}
}

// Retired in favor of handleString, but kept in place for legacy purposes
export function handleEffects(toEffect: string) {
	let foundIndex = toEffect.search(/`e{.+}/g);
	if (foundIndex === -1) return <span>{toEffect}</span>;

	let effectArray: {text: string, effect: string}[] = [];

	while (foundIndex !== -1) {
		let endIndex = toEffect.indexOf("}", foundIndex);
		if (toEffect.substring(foundIndex + 3, endIndex + 1) === "jitter") {
			let endOfEffect = toEffect.indexOf("`e{normal}", endIndex + 1);
			effectArray.push({text: toEffect.substring(endIndex + 1, endOfEffect), effect: "italics"});
		}
	}

	return effectArray.map((effect, index) => {
		if (effect.effect === "italics") {
			return <i key={index}>effect.text</i>
		}
	})
}

export function trimEffects(toTrim: string) {
	// For now, I'm just trimming the jitter effects since I don't want to replicate them
	return toTrim.replaceAll(/`e{.+}/g, "");
}

export function trimColorsAndEffects(toTrim: string) {
	return toTrim.replaceAll(/`[ec]{.+}/g, "");
}

interface Section {
	"text": string;
	"color": string;
	"effect": string;
}

export function handleString(
	toHandle: string,
	textColors: {[key: string]: string | string[]},
	textEffects?: {[key: string]: string}
) {
	// Sometimes the best course of action is to burn everything to the ground and begin anew...

	// const effectRegex = /`e\{([^{}]*)}/g;
	// const colorRegex = /`c\{([^{}]*)}/g

	// const tagRegex = /`([ce])\{([^{}]*)}/g

	let currentEffect = "none";
	let currentColor = "white";

	let pointer = 0;

	let currentSection = "";
	const sections: Section[] = []; // Is reassigned but not through assignment, through .push()

	while (pointer < toHandle.length) {
		let char = toHandle.charAt(pointer);
		if (toHandle.charAt(pointer) === "`") {
			// First, we add the previous section with given modifiers (if the section is empty, we skip adding it)
			if (currentSection != "") {
				sections.push({
					"text": currentSection,
					"color": currentColor,
					"effect": currentEffect
				});
			}

			// Then, reset the current section so that we don't collect previous text
			currentSection = "";

			// We are starting either a color or effect tag
			let tagString = "";
			let tagType;
			pointer++;

			if (pointer < toHandle.length) {
				tagType = toHandle.charAt(pointer);
			} else {
				break;
			}

			pointer += 2;

			while (pointer < toHandle.length) {
				char = toHandle.charAt(pointer);
				pointer ++;
				if (char == "}") break;
				tagString += char;
			}

			// We have successfully obtained the tag type and text and pushed the pointer to the character after the }
			if (tagType == 'e') {
				currentEffect = tagString;
			} else {
				currentColor = tagString;
			}
		} else {
			currentSection += char;
			pointer++;
		}
	}

	if (currentSection != "") {
		sections.push({
			"text": currentSection,
			"color": currentColor,
			"effect": currentEffect
		})
	}

	// console.log(sections);
	return styleString(sections, textColors, textEffects);
}

export function styleString(
	sections: Section[],
	textColors: {[key: string]: string | string[]},
	textEffects?: {[key: string]: string}
) {

	return <>
		{sections.map((section, index) => {
			let colored: ReactNode;

			const color = section.color;
			const effect = section.effect;
			const text = section.text;

			let styled : ReactNode;

			// console.log("text effects")
			// console.log(textEffects)

			if (textEffects && textEffects[effect] && textEffects[effect] != "none") {
				const textEffect = textEffects[effect];
				// console.log(textEffect);
				if (textEffect == "italics") {
					styled = <i key={"e" + index}>{text}</i>;
				} else if (textEffect == "jitter") {
					styled = <JitterText key={"e" + index} text={text}/>
				} else if (textEffect == "wave") {
					styled = <WaveText key={"e" + index} text={text}/>
				} else {
					// Base case, catches invalid cases
					styled = text;
				}
			} else {
				styled = text;
			}

			if (textColors[color]) {
				const textColor = textColors[color];
				if (Array.isArray(textColor)) {
					colored = <RepeatingGradientText key={"c" + index}
						colors={textColor}
						size={100}
					>{styled}</RepeatingGradientText>
				} else {
					colored = <span
						style={{
							color: textColor
						}}
						key = {"c" + index}
					>{styled}</span>
				}
			} else {
				colored = styled;
			}

			return colored;
		})}
	</>
	//
	//
	// console.log(sections);
	// let nodeArray = [];
	//
	// for (let i = 0; i < sections.length; i++) {
	// 	const section = sections[i]
	// 	let colored: ReactNode;
	//
	// 	const color = section.color;
	// 	const effect = section.effect;
	// 	const text = section.text;
	//
	// 	if (textColors[color]) {
	// 		const textColor = textColors[color];
	// 		if (Array.isArray(textColor)) {
	// 			colored = <RepeatingGradientText
	// 				colors={textColor}
	// 				size={100}
	// 			>{text}</RepeatingGradientText>
	// 		} else {
	// 			colored = <span style={{
	// 				color: textColor
	// 			}}>{text}</span>
	// 		}
	// 	} else {
	// 		colored = text;
	// 	}
	//
	// 	let styled : ReactNode;
	//
	// 	if (textEffects && textEffects[effect] && textEffects[effect] != "none") {
	// 		const textEffect = textEffects[effect];
	// 		if (textEffect == "italics") {
	// 			styled = <i>{colored}</i>;
	// 		} else {
	// 			// Base case, catches invalid cases
	// 			styled = colored;
	// 		}
	// 	} else {
	// 		styled = colored;
	// 	}
	//
	// 	styled.key = i.toString();
	//
	// 	nodeArray.push(styled);
	// }
	//
	// return nodeArray;
}