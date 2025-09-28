"use client";

import Link from "next/link";
import {Popover, PopoverState} from "react-tiny-popover";
import {useState} from "react";
import { motion } from "motion/react";

import type {EpisodeDetails} from "@/types/episode";
import epNameToFileName from "@/utils/epNameToFileName";

export default function EpisodeEntry(
	{details, game, story}:
	{details: EpisodeDetails, game: string, story: string}
) {
	const [popoverOpen, setPopoverOpen] = useState(false);

	return (
		<>
			<Popover
				isOpen={popoverOpen}
				positions={["bottom", "top"]}
				padding={10}
				reposition={true}
				content={({popoverState}: {popoverState: PopoverState}) => (
					<motion.div
						className="bg-gray-700 rounded-md py-2 px-5 text-lg font-inter"
						initial={{
							opacity: 0,
							y: popoverState?.position === "bottom" ? -20 : 20
						}}
						animate={{
							opacity: 1,
							y: 0
						}}
					>
						{details.desc}
					</motion.div>
				)}
			>
				<Link
					className="flex rounded-md gap-5 items-end bg-gray-800 p-3 transition-colors hover:bg-gray-700 cursor-pointer"
					href={`/viewer/${game}/${story}/${epNameToFileName(details.ep_name)}`}
					onMouseEnter={() => setPopoverOpen(true)}
					onMouseLeave={() => setPopoverOpen(false)}
				>
					<h1 className="self-start text-2xl font-inter basis-100 md:basis-auto">{details.ep_name}</h1>
					<h2 className="self-center text-xl text-zinc-400 font-inter basis-100 md:basis-auto">{details.ep_title}</h2>
				</Link>
			</Popover>


		</>
	)
}