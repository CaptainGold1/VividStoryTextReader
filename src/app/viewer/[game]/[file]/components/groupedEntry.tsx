import type {Entry} from "@/types/entry";
import NamedEntry from "@/app/viewer/[game]/[file]/components/namedEntry";
import {colorText, trimEffects} from "@/utils/stringUtils";

export default function GroupedEntry (
	{entries, textColors, nameColors} :
	{entries: Entry[], textColors: {[key: string]: string | string[]}, nameColors: {[key: string]: string | string[]}}
) {
	// TODO: Make this use handleString to actually replicate jitter effects
	return (
		<div className="">
			{entries.map((entry, index) => {
				if (entry.speaker) {
					return <NamedEntry
						key={index}
						name={entry.speaker ?? ""}
						text={entry.text ?? ""}
						nameColor={entry.speaker ? nameColors[entry.speaker] : ""}
						textColors={textColors}
					/>
				} else {
					return <div
						key={index}
						className={"text-base md:text-lg py-1 px-2 basis-320 font-inter wrap-anywhere"}
					>
						{colorText(trimEffects(entry.text ?? ""), textColors)}
					</div>
				}

			})}
		</div>
	)
}