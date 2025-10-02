import {JSX} from "react";

import StoryNav from "@/app/viewer/[game]/[story]/[file]/components/storyNav";
import NamedEntry from "@/app/viewer/[game]/[story]/[file]/components/namedEntry";
import type {Episode, EpisodeDetails} from "@/types/episode";
import {getFileData} from "@/utils/getFileData";
import GroupedEntry from "@/app/viewer/[game]/[story]/[file]/components/groupedEntry";
import {Entry} from "@/types/entry";
import {getGameMetadata} from "@/utils/getGameMetadata";
import {getStoryData} from "@/utils/getStoryData";
import EntrySeparator from "@/app/viewer/[game]/[story]/[file]/components/entrySeparator";
import GroupedMessageEntry from "@/app/viewer/[game]/[story]/[file]/components/groupedMessageEntry";
import InteractivePage from "@/app/viewer/[game]/[story]/[file]/interactivePage";

// TODO: To make the encore work like I want it to (and to allow dynamic stuff and all that)
// A lot of this logic has to be shoehorned into a client component, which I suppose makes sense
// But also makes me mad

export default async function FilePage(
	{params} :
	{params: Promise<{game: string, story: string, file: string}>}
) {
	const {game, story, file} = await(params)

	const sectionedEpisode = await getFileData(game, story, file);
	const episode = sectionedEpisode.main_ep;
	const gameMetadata = await getGameMetadata(game);
	const gameData = await getStoryData(game, story);

	let nextEp: EpisodeDetails | null = null;
	let prevEp: EpisodeDetails | null = null;

	for (let i = 0; i < gameData.length; i++) {
		if (gameData[i].story_id == episode.story_id) {
			if (i > 0) {
				prevEp = gameData[i - 1];
			}
			if (i < gameData.length - 1) {
				nextEp = gameData[i + 1];
			}
		}
	}

	return (
		<div className="flex flex-col items-center w-full h-full min-h-[calc(100vh-48px)]">
			<StoryNav game={game} story={story} styledGameName={gameMetadata.name} prevEp={prevEp} nextEp={nextEp}/>
			<div className="flex flex-col justify-center sm:w-8/12 gap-1 mb-64">
				<p className="text-center text-2xl mt-8 mb-4 font-bold">{episode.desc}</p>
				<InteractivePage sectionedEpisode={sectionedEpisode} gameMetadata={gameMetadata}/>
			</div>
			<StoryNav game={game} story={story} styledGameName={gameMetadata.name} prevEp={prevEp} nextEp={nextEp} bottomBar={true}/>
		</div>
    )
}