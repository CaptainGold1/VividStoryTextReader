import EpisodeEntry from "@/app/viewer/[game]/[story]/components/episodeEntry";
import {getGameMetadata} from "@/utils/getGameMetadata";
import StoryEntry from "./components/storyEntry";

export default async function GamePage({params}: {params: Promise<{game: string}>} ) {
	const {game} = await params;
	const stories = (await getGameMetadata(game)).stories;

	return (
		<ol className="flex flex-col gap-5 mt-5 w-11/12 md:w-8/12 mb-5 md:mb-64">
			{
				stories.map(
					story =>
						<StoryEntry details={story} game={game} key={story.id}/>)
			}
		</ol>
	)
}