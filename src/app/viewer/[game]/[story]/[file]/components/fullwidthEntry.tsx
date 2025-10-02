"use client";

import {handleString} from "@/utils/stringUtils";

export default function FullwidthEntry(
	{text, textColors, textEffects} :
	{
		text: string,
		textColors: {[key: string]: string | string[]},
		textEffects?: {[key: string]: string}
	}
) {
	return (
		<div className="flex justify-center gap-2 md:gap-4">
			<div className="text-base md:text-lg py-1 pr-1 basis-320 font-inter wrap-anywhere">
				{handleString(text, textColors, textEffects)}
			</div>
		</div>
	)
}