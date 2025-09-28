

export interface GameMetadata {
	name: string;
	stories: [{name: string, id: string}]
	charColors: {[character: string]: string | string[]};
	textColors: {[text: string]: string | string[]};
	textEffects?: {[text: string]: string};
}