export default function epNameToFileName(epName: string): string {
	return (epName
		.toLowerCase()
		.replace(" ", "_")
		.replace(".", "-"))
}