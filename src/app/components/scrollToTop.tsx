'use client';

import { motion } from "motion/react";
import {useEffect, useState} from "react";

export default function ScrollToTop() {
	const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

	function scrollToTop() {
		if (!isBrowser()) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 10) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		}
	})

	return (
		<motion.button
			className="fixed right-8 bottom-8 size-16 po"
			onClick={scrollToTop}
			style={{
				pointerEvents: isVisible ? "auto" : "none",
			}}
			animate={isVisible ? "hidden" : "visible"}
			variants={{
				visible: {opacity: 0},
				hidden: {opacity: 1}
			}}
			initial={{
				opacity: 0,
			}}
		>
			<motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
			            className="size-16 stroke-foreground"
			            whileHover={{scale: 1.1}}
			            whileTap={{scale:0.8}}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
			</motion.svg>
		</motion.button>
	)
}