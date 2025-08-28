import {ReactNode} from "react";
import ScrollToTop from "@/app/components/scrollToTop";


export default function ViewerLayout({children}: {children: Readonly<ReactNode>}) {

	return (
		<>
			<ScrollToTop/>
			{children}
		</>
	)
}