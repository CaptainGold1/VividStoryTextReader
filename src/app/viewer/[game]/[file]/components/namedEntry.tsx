"use client";

import {handleString} from "@/utils/stringUtils";
import GradientText from "@/app/components/gradientText";

/*
function getCharWidth(text: string) {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext('2d');

	if (context) {
		context.font = "inter 18px";
		return context.measureText(text).width;
	} else {
		return 0;
	}
}
 */

export default function NamedEntry(
	{name, text, nameColor, textColors, textEffects} :
	{
		name: string,
		text: string,
		nameColor?: string | string[],
		textColors: {[key: string]: string | string[]},
		textEffects?: {[key: string]: string}
	}
) {
	let textComponent;

	// console.log(handleString(text, textColors));

	if (!nameColor || nameColor === "") {
		nameColor = "oklch(70.5% 0.015 286.067)" //--color-zinc-400
	}

	if (Array.isArray(nameColor)) {
		textComponent = <GradientText colors={nameColor}>{name}</GradientText>
	} else {
		textComponent = <span style={{color: nameColor}}>{name}</span>
	}

	return (
		<div className="flex justify-center gap-2 md:gap-4">
			<div className="text-base md:text-lg rounded-md pl-1 pr-0 py-1 text-right basis-100 sm:basis-80 font-inter font-bold">
				{textComponent}
			</div>
			<div className="text-base md:text-lg py-1 pr-1 basis-320 font-inter wrap-anywhere">
				{handleString(text, textColors, textEffects)}
			</div>
		</div>
	)
}