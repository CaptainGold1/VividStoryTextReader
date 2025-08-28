import {handleString} from "@/utils/stringUtils";

export default function Testing() {
	return (
		<div className="text-sm">
			{handleString(
				"`c{think}For real??? I find it `e{jitter}really`e{normal} hard to believe there's nobody inside.",
				{
					"white": "rgb(237, 237, 237)",

					"think": "#00cdff",
					"red": "oklch(63.7% 0.237 25.331)",
					"rcolor": ["#ffffff", "#a17fff", "#ff7fb6", "#ff7fed"],

					"dawn": "#a17fff",
					"wkeeper": "#ff7fb6",
					"sat": "#ff7fed",
					"alli": "#7fff88",
					"tsuki": "#ff7fb6"
				},
				{"jitter": "jitter"}
			)}
		</div>
	)
}