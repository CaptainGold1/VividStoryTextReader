import EpisodeEntry from "@/app/viewer/[game]/components/episodeEntry";

import type {EpisodeDetails} from "@/types/episode";
import {getGameData} from "@/utils/getGameData";


export default async function GamePage({params}: {params: Promise<{game: string}>} ) {
	const {game} = await params;

	const episodeDetailsList: EpisodeDetails[] = await getGameData(game);

	return (
		<ul className="flex flex-col gap-5 mt-5 w-11/12 md:w-8/12 mb-5 md:mb-64">
			{
				episodeDetailsList.map(episode => <EpisodeEntry details={episode} game={game} key={episode.story_id}/>)
			}
		</ul>
	)
}