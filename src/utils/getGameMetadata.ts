import type {GameMetadata} from "@/types/game";
import fs from "fs";

export async function getGameMetadata(gameName: string):
	Promise<GameMetadata>
{
	return new Promise<GameMetadata>((resolve, reject) => {
		fs.readFile("src/data/" + gameName + "/meta.json", (err, data) => {
			if (err) {
				reject(err);
			}

			let parsedEpisode = JSON.parse(data.toString());

			resolve(parsedEpisode);
		});
	});
}