export default function EmptyNav(
	{bottomBar, children}:
	{bottomBar?: boolean, children: React.ReactNode}
) {
	return <div className={
		"bg-violet-950 w-full p-1 flex gap-4 md:gap-10 h-[36px] items-center shrink-0 " +
		(bottomBar ? "mt-auto" : "")
	}>
		{children}
	</div>
}