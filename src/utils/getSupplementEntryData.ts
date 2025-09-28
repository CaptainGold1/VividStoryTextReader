import fs from "fs";

import {Supplement} from "@/types/supplement";

export async function getSupplementEntryData(gameName: string, fileName: string): Promise<Supplement> {
	return new Promise<Supplement>((resolve, reject) => {
		fs.readFile(`src/data/${gameName}/supplements/${fileName}.json`, (err, data) => {
			if (err) {
				reject(err);
			}

			const parsedEpisode: Supplement = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}