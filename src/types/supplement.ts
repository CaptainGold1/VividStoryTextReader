export interface SupplementDetailsDict {
	[key: string]: SupplementDetails;
}

export interface SupplementDetails {
	"name": string
	"cost": number
	"script": string
}

export interface Supplement {
	"id": string
	"name": string
	"script": string
	"text": string
}