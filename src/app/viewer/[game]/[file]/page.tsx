import NamedEntry from "@/app/viewer/[game]/[file]/components/namedEntry";

export default async function FilePage({params} : {params: Promise<{game: string, file: string}>}) {
	const {game, file} = await(params)

    return (
		<div className="flex justify-center">
			<div className="flex flex-col justify-center mt-10 w-8/12 gap-5">
				<NamedEntry name="Saturday" text="WEEHEEE" nameColor=""/>
				<NamedEntry name="Kisho" text="Kisho" nameColor=""/>
			</div>
		</div>
    )
}