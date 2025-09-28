import LoadingNavBar from "@/app/viewer/[game]/components/loading/loadingNavBar";
import LoadingSkeletonEntry from "@/app/viewer/[game]/components/loading/loadingSkeletonEntry";

export default function Loading() {
	return (
		<div className="flex flex-col items-center w-full h-[calc(100vh-48px)]">
			<LoadingNavBar/>
			<div className="flex flex-col sm:w-8/12 gap-1 grow-0 overflow-hidden">
				<div className={
					"mt-8 mb-4 h-[32px] w-1/2 self-center " +
					"rounded-full loading-skeleton opacity-20 shrink-0"
				}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
				<LoadingSkeletonEntry visibleName={true}/>
				<LoadingSkeletonEntry visibleName={false}/>
			</div>
		</div>
	)
}