import fs from "fs";

import type {EpisodeDetails} from "@/types/episode";

export async function getStoryData(gameName: string, storyName: string): Promise<EpisodeDetails[]> {
	return new Promise<EpisodeDetails[]>((resolve, reject) => {
		fs.readFile(`src/data/${gameName}/${storyName}/storyData.json`, (err, data) => {
			if (err) {
				reject(err);
			}

			const parsedEpisode: EpisodeDetails[] = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}