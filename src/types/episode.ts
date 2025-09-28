import type {Entry} from "@/types/entry";

export interface EpisodeDetails {
	ep_name: string
	ep_title: string
	story_id: string
	content_alert?: string
	desc: string
	content?: string
}

export interface Part {
	location: string
	time: string
	date: string
	hiddenGui: boolean
	entries: Entry[]
}

export interface Episode {
	ep_name: string
	ep_title: string
	story_id: string
	content_alert: string
	desc: string
	content: string
	array: Part[]
}