export default function SupplementText (
	{text} :
	{text: string}
) {
	const parsedTextList = text.split('\n');

	return (
		<div className="text-base md:text-xl py-1 pr-1 font-inter whitespace-pre-wrap">
			{
				parsedTextList.map((string, i) => {
					return <p className="mb-4" key={i}>{string}</p>
				})
			}
		</div>
	)
}