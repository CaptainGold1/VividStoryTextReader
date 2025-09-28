import {SupplementDetails} from "@/types/supplement";
import Link from "next/link";
import epNameToFileName from "@/utils/epNameToFileName";


export default function SupplementEntry(
	{details, game}:
	{details: SupplementDetails, game: string}
) {
	return (
		<Link
			className="flex rounded-md gap-5 items-end bg-gray-800 p-3 transition-colors hover:bg-gray-700 cursor-pointer"
			href={`/viewer/${game}/supplements/${epNameToFileName(details.script)}`}
		>
			<h1 className="self-start text-2xl font-inter basis-100 md:basis-auto">{details.name}</h1>
		</Link>
	)
}