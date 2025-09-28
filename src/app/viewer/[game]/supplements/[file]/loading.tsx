import LoadingNavBar from "@/app/viewer/[game]/components/loading/loadingNavBar";

export default function Loading() {
	return (
		<div className="flex flex-col items-center w-full h-[calc(100vh-48px)]">
			<LoadingNavBar/>
		</div>
	)
}