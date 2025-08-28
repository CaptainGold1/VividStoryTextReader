import Link from "next/link";
import {EpisodeDetails} from "@/types/episode";
import epNameToFileName from "@/utils/epNameToFileName";

export default function StoryNav(
	{game, styledGameName, nextEp, prevEp}:
	{game: string, styledGameName: string, nextEp: EpisodeDetails | null, prevEp: EpisodeDetails | null}
) {


	return (
		<div className="bg-violet-950 w-full p-1 flex gap-4 md:gap-10">
			<Link
				className=""
				href={`/viewer/${game}`}>
				{styledGameName}
			</Link>
			{
				prevEp && <Link
					className={`ml-auto ${nextEp ? "" : "mr-2"}`}
					href={`/viewer/${game}/${epNameToFileName(prevEp.ep_name)}`}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="size-6 inline mr-2"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
					</svg>
					{prevEp.ep_name}
				</Link>
			}
			{
				nextEp && <Link
					className={`${(prevEp == null) && "ml-auto"}`}
					href={`/viewer/${game}/${epNameToFileName(nextEp.ep_name)}`}>
					{nextEp.ep_name}
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 inline ml-2">
						<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</Link>
			}
		</div>
	)
}