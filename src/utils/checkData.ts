// Functions were for testing and are now obsolete

// import fs from "fs";
//
// export async function gameDataExists(gameName: string) {
// 	try {
// 		await fs.promises.access("src/data/" + gameName);
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// }
//
// export async function fileDataExists(gameName: string, fileName:string) {
// 	try {
// 		await fs.promises.access("src/data/" + gameName + "/" + fileName + ".json");
// 		return true;
// 	} catch (e) {
// 		return false;
// 	}
// }