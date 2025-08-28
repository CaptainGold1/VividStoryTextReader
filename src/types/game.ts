

export interface GameMetadata {
	name: string;
	charColors: {[character: string]: string | string[]};
	textColors: {[text: string]: string | string[]};
	textEffects?: {[text: string]: string};
}