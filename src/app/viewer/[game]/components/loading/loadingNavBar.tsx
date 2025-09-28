import EmptyNav from "@/app/viewer/[game]/components/emptyNav";

export default function LoadingNavBar() {
	return (
		<EmptyNav>
			<div
				className="mx-2 h-2 w-1/16 rounded-full loading-skeleton opacity-50"
			/>
			<div
				className="mx-2 h-2 w-2/16 rounded-full loading-skeleton ml-auto opacity-50"
			/>
		</EmptyNav>
	)
}