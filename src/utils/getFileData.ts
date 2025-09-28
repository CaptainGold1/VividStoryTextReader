import fs from "fs";

import type {Episode} from "@/types/episode";

export async function getFileData(gameName: string, storyName: string, fileName: string): Promise<Episode> {
	// Uncomment to add a delay to test loading skeletons.
	// await new Promise(r => setTimeout(r, 5000));

	return new Promise<Episode>((resolve, reject) => {
		fs.readFile(`src/data/${gameName}/${storyName}/${fileName}.json`, (err, data) => {
			if (err) {
				reject(err);
			}


			const parsedEpisode: Episode = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}