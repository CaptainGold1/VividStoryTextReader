export interface Entry {
	type: string,
	speaker?: string,
	text?: string,
	messages?: Message[],
	option_type?: "loadSectionFromId",
	options?: DialogueOption[],
}

export interface Message {
	sender: string,
	msgtext: string,
	line_count: number,
}

export interface DialogueOption {
	name: string,
	story_id: string,
}