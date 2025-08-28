import {ReactNode} from "react";


export default function ViewerLayout({children}: {children: Readonly<ReactNode>}) {

	return (
		<div className="flex justify-center w-full h-full">
			{children}
		</div>
	)
}