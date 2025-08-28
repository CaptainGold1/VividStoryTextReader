import fs from "fs";

import type {Episode} from "@/types/episode";

export async function getFileData(gameName: string, fileName: string): Promise<Episode> {
	return new Promise<Episode>((resolve, reject) => {
		fs.readFile("src/data/" + gameName + "/" + fileName + ".json", (err, data) => {
			if (err) {
				reject(err);
			}

			let parsedEpisode: Episode = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}