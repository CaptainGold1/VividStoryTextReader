import fs from "fs";

import {SupplementDetailsDict} from "@/types/supplement";

export async function getSupplementData(gameName: string): Promise<SupplementDetailsDict> {
	// Uncomment to add a delay to test loading skeletons.
	// await new Promise(r => setTimeout(r, 5000));

	return new Promise<SupplementDetailsDict>((resolve, reject) => {
		fs.readFile(`src/data/${gameName}/supplements/supplementData.json`, (err, data) => {
			if (err) {
				reject(err);
			}

			const parsedEpisode: SupplementDetailsDict = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}