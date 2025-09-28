import type {Message} from "@/types/entry";
import NamedEntry from "@/app/viewer/[game]/[story]/[file]/components/namedEntry";

export default function GroupedMessageEntry (
	{entries, textColors, nameColors} :
	{entries: Message[], textColors: {[key: string]: string | string[]}, nameColors: {[key: string]: string | string[]}}
) {
	return (
		<div className="">
			{entries.map((entry, index) => {
				return <NamedEntry
					key={index}
					name={entry.sender ?? ""}
					text={entry.msgtext ?? ""}
					nameColor={entry.sender ? nameColors[entry.sender] : ""}
					textColors={textColors}
				/>
			})}
		</div>
	)
}