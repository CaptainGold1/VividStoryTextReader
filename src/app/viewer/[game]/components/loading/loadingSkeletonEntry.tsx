export default function LoadingSkeletonEntry(
	{visibleName}:
	{visibleName: boolean}
) {
	return (
		<div className="flex justify-center gap-2 md:gap-4">
			<div
				className="rounded-full ml-1 my-1 basis-100 sm:basis-80 loading-skeleton h-[28px]"
				style={{opacity: visibleName ? 0.2 : 0}}
			/>
			<div className="my-1 mr-1 basis-320 flex flex-col gap-2">
				<div className="rounded-full loading-skeleton h-[24px] opacity-20"/>
				<div className="rounded-full loading-skeleton h-[24px] opacity-20 w-7/8"/>
			</div>
		</div>
	)
}