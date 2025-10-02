import fs from "fs";

import type {Episode, SectionedEpisode} from "@/types/episode";

export async function getFileData(gameName: string, storyName: string, fileName: string): Promise<SectionedEpisode> {
	// Uncomment to add a delay to test loading skeletons.
	// await new Promise(r => setTimeout(r, 5000));

	const path = `src/data/${gameName}/${storyName}/${fileName}`
	return new Promise<SectionedEpisode>((resolve, reject) => {
		if (fs.existsSync(path + ".json")) {
			// A JSON file exists at the path
			fs.readFile(path + ".json", (err, data) => {
				if (err) {
					reject(err);
				}

				const parsedEpisode: Episode = JSON.parse(data.toString());
				const sectioned: SectionedEpisode = {
					"main_ep": parsedEpisode,
				}

				resolve(sectioned);
			});
		} else if (fs.existsSync(path)) {
			// Directory exists at this path, we want to load all files at once
			const mainFilePath = path + "/" + fileName + ".json";
			let sectioned: SectionedEpisode;
			// A JSON file exists at the path
			fs.readFile(mainFilePath, (err, data) => {
				if (err) {
					reject(err);
				}

				const parsedEpisode: Episode = JSON.parse(data.toString());
				sectioned = {
					main_ep: parsedEpisode,
					sections: {},
				};


				fs.readdir(path, (err, subParts) => {
					if (err) {
						reject(err);
					}

					for (const subPartName of subParts) {
						if (subPartName == fileName + ".json") {
							continue;
						}

						fs.readFile(path + "/" + subPartName, (err, data) => {
							if (err) {
								reject(err);
							}

							const parsedEpisode: Episode = JSON.parse(data.toString());
							if (sectioned.sections) {
								sectioned.sections[subPartName.replace(".json", "")] = parsedEpisode;
							} else {
								reject("sectioned.sections is undefined when it should not be!");
							}
						});
					}

					resolve(sectioned);
				});
			});
		} else {
			// Neither a file nor directory exists at the requested path, throwing an error
			reject(`Could not find a directory or folder at ${path}(.json).`);
		}
	});
}