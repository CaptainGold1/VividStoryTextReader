import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

import Topbar from "@/app/components/topbar";

// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "VSTR",
	description: "Vivid Story Text Reader",
};

export default function RootLayout({
	                                   children,
                                   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body
			className={`${inter.variable} antialiased`}
		>
			<div className="flex flex-col">
				<Topbar/>
				{children}
			</div>
		</body>
		</html>
	);
}
