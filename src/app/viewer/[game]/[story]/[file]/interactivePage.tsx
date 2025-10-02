"use client";

import React, {JSX} from "react";
import {Entry} from "@/types/entry";
import EntrySeparator from "@/app/viewer/[game]/[story]/[file]/components/entrySeparator";
import GroupedEntry from "@/app/viewer/[game]/[story]/[file]/components/groupedEntry";
import NamedEntry from "@/app/viewer/[game]/[story]/[file]/components/namedEntry";
import GroupedMessageEntry from "@/app/viewer/[game]/[story]/[file]/components/groupedMessageEntry";
import {Part, SectionedEpisode} from "@/types/episode";
import {GameMetadata} from "@/types/game";
import DialogueOptions from "@/app/viewer/[game]/[story]/[file]/components/dialogueOptions";
import FullwidthEntry from "@/app/viewer/[game]/[story]/[file]/components/fullwidthEntry";

export default function InteractivePage(
	{sectionedEpisode, gameMetadata} :
	{sectionedEpisode: SectionedEpisode, gameMetadata: GameMetadata},
) {
	const nameColors = gameMetadata["charColors"];
	const textColors = gameMetadata["textColors"];
	const textEffects = gameMetadata["textEffects"];

	const parts = sectionedEpisode.main_ep.array;

	// const [currentComponents, setCurrentComponents] = useState<React.JSX.Element[][]>([[]]);

	function renderPartFromJson(parts: Part[]) {
		return parts.map((part) => {
			let components: JSX.Element[] = [];

			let separatorCount = 0;
			// NOTE: This used to be part.entries.length - 1, I'm not sure why but it breaks my thing so I removed it
			for (let i = 0; i < part.entries.length; i++) {
				let entry = part.entries[i];
				if (entry.type === "toFullscreen") {
					let fullscreenEntries: Entry[] = [];
					while (entry.type !== "endFullscreen") {
						i++;
						if (i >= part.entries.length) {
							break;
						}
						entry = part.entries[i];

						fullscreenEntries.push(entry);
					}

					components.push(<EntrySeparator key={"separator" + separatorCount++}/>);
					components.push(<GroupedEntry
						key={i}
						entries={fullscreenEntries}
						textColors={textColors}
						nameColors={nameColors}
					/>);
					components.push(<EntrySeparator key={"separator" + separatorCount++}/>);
				} else if (entry.type === "dialogue") {
					// console.log(entry.speaker + " " + entry.text);
					components.push(<NamedEntry
						key={i}
						name={entry.speaker ?? ""}
						text={entry.text ?? ""}
						nameColor={entry.speaker ? nameColors[entry.speaker] : ""}
						textColors={textColors}
						textEffects={textEffects}
					/>)
				} else if (entry.type === "textMessage") {
					components.push(<EntrySeparator key={"separator" + separatorCount++}/>);
					components.push(<GroupedMessageEntry
						key={i}
						entries={entry.messages ?? []}
						textColors={textColors}
						nameColors={nameColors}
					/>)
					components.push(<EntrySeparator key={"separator" + separatorCount++}/>);
				} else if (entry.type === "fullwidthDialogue") {
					components.push(<FullwidthEntry
						key={i}
						text={entry.text ?? ""}
						textColors={textColors}
						textEffects={textEffects}
					/>)
				} else if (entry.type === "dialogueOptions") {
					// console.log("dialogueOptions");
					// console.log(entry.options);
					components.push(<DialogueOptions key={i}
						dialogueOptions={entry.options ?? []}
						sectionedEpisode={sectionedEpisode}
						gameMetadata={gameMetadata}
					/>)
				}
			}

			return components.map((component) => {
				return component;
			})
		})
	}

	const components = renderPartFromJson(parts);

	return (
		<>
			{components}
		</>
	)
}