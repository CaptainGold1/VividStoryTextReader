export interface Entry {
	type: string,
	speaker?: string,
	text?: string,
	messages?: Message[]
}

export interface Message {
	sender: string,
	msgtext: string,
	line_count: number,
}