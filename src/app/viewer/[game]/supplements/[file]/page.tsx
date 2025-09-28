import {getGameMetadata} from "@/utils/getGameMetadata";
import {getSupplementEntryData} from "@/utils/getSupplementEntryData";
import {getSupplementData} from "@/utils/getSupplementData";
import {SupplementDetails} from "@/types/supplement";
import SupplementNav from "@/app/viewer/[game]/supplements/[file]/components/supplementNav";
import SupplementText from "@/app/viewer/[game]/supplements/[file]/components/supplementText";

export default async function FilePage(
	{params} :
	{params: Promise<{game: string, file: string}>}
) {
	const {game, file} = await(params)

	const supplement = await getSupplementEntryData(game, file);
	const gameMetadata = await getGameMetadata(game);
	const supplementDetails = Object.entries(await getSupplementData(game));

	let nextEp: SupplementDetails | null = null;
	let prevEp: SupplementDetails | null = null;

	for (let i = 0; i < supplementDetails.length; i++) {
		if (supplementDetails[i][0] == supplement.id) {
			if (i > 0) {
				prevEp = supplementDetails[i - 1][1];
			}
			if (i < supplementDetails.length - 1) {
				nextEp = supplementDetails[i + 1][1];
			}
		}
	}

    return (
		<div className="flex flex-col items-center w-full h-full min-h-[calc(100vh-48px)]">
			<SupplementNav game={game} styledGameName={gameMetadata.name} prevEp={prevEp} nextEp={nextEp}/>
			<div className="flex flex-col justify-center sm:w-8/12 gap-1 mb-64">
				<p className="text-center text-xl mt-8 mb-4 font-bold">{supplement.name}</p>
				<SupplementText text={supplement.text}/>
			</div>
			<SupplementNav game={game} styledGameName={gameMetadata.name} prevEp={prevEp} nextEp={nextEp} bottomBar={true}/>
		</div>
    )
}