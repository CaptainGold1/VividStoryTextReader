import {getSupplementData} from "@/utils/getSupplementData";
import {SupplementDetailsDict} from "@/types/supplement";
import SupplementEntry from "@/app/viewer/[game]/supplements/components/supplementEntry";


export default async function StoryPage({params}: {params: Promise<{game: string}>} ) {
	const {game} = await params;

	const supplementDetailsDict: SupplementDetailsDict = await getSupplementData(game);

	return (
		<ol className="flex flex-col gap-5 mt-5 w-11/12 md:w-8/12 mb-5 md:mb-64">
			{
				Object.entries(supplementDetailsDict).map(([key, value]) => {
					return <SupplementEntry details={value} game={game} key={key}/>
				})
			}
		</ol>
	)
}