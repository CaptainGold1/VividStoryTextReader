import {DialogueOption} from "@/types/episode";

export default function nextOptions(
	{nextOptions, executeNextOption} :
	{nextOptions: [DialogueOption], executeNextOption: (nextOption: DialogueOption) => void}
) {
	return (
		<div className="flex flex-row">
			{nextOptions.map((option, i) => {
				return (<button key={i} onClick={() => {executeNextOption(option)}}>
					{option.name}
				</button>)
			})}
		</div>
	)
}