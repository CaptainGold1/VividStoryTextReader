"use client";

import {DialogueOption, SectionedEpisode} from "@/types/episode";
import InteractivePage from "@/app/viewer/[game]/[story]/[file]/interactivePage"
import React, {useState} from "react";
import {GameMetadata} from "@/types/game";

export default function DialogueOptions(
	{dialogueOptions, sectionedEpisode, gameMetadata} :
	{dialogueOptions: DialogueOption[], sectionedEpisode: SectionedEpisode, gameMetadata: GameMetadata}
) {
	const [currentDisplayedOption, setCurrentDisplayedOptions] = useState<React.JSX.Element>();
	const [stateSectionedEpisode, setStateSectionedEpisode] = useState(sectionedEpisode);

	// console.log(dialogueOptions);

	/*
	TODO: For some reason, if you select "Miri's Plan (1)", "Miri's Plan (2)", and then go back and select "1028 AI"
	instead of "Miri's Plan (1)", it doesn't properly clear Miri's Plan (2) from the page. From what I can tell this
	only occurs under "Miri's Plan (1)", and all other options properly clear the page when a higher option is
	selected. I have no idea why the hell it does this. Help me.
	 */

	return (
		<>
			<div className="flex flex-row justify-center gap-2 my-4 flex-wrap">
				{dialogueOptions.map((option, i) => {
					return (<button
						className="hover:cursor-pointer text-xl border rounded-lg px-2 bg-purple-900 hover:bg-purple-800 transition-colors"
						key={i}
						onClick={() => {
						// console.log("button pressed");
						const newSectionedEp = sectionedEpisode;
						if (sectionedEpisode.sections) {
							newSectionedEp.main_ep = sectionedEpisode.sections[option.story_id];
						}
						setStateSectionedEpisode(newSectionedEp);
						setCurrentDisplayedOptions(
							<>
								<p className="text-center text-2xl font-bold">{option.name}</p>
								<InteractivePage
									sectionedEpisode={stateSectionedEpisode}
									gameMetadata={gameMetadata}
								/>
							</>
						)
					}}>
						{option.name}
					</button>)
				})}
			</div>
			{currentDisplayedOption}
		</>
	)
}