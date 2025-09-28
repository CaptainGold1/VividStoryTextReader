"use client";

import Link from "next/link";

export default function StoryEntry(
	{details, game}:
	{details: {name: string, id: string}, game: string}
) {
	return (
		<>
			<Link
				className="flex rounded-md gap-5 items-end bg-gray-800 p-3 transition-colors hover:bg-gray-700 cursor-pointer"
				href={`/viewer/${game}/${details.id}`}
			>
				<h1 className="self-start text-2xl font-inter basis-100 md:basis-auto">{details.name}</h1>
				{/*<h2 className="self-center text-xl text-zinc-400 font-inter basis-100 md:basis-auto"></h2>*/}
			</Link>
		</>
	)
}