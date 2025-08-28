import fs from "fs";

import type {EpisodeDetails} from "@/types/episode";

export async function getGameData(gameName: string): Promise<EpisodeDetails[]> {
	return new Promise<EpisodeDetails[]>((resolve, reject) => {
		fs.readFile("src/data/" + gameName + "/episodes.json", (err, data) => {
			if (err) {
				reject(err);
			}

			const parsedEpisode: EpisodeDetails[] = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}