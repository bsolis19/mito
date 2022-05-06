import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/hero.css" 

export default function Hero( { children } ) {
	return (
		<div
			style={{
				// maxHeight:`100vh`,
				display: `inline-block`,
			}}
		>
		<StaticImage
			src="../images/pexels-tommy-mcgrath-11723568.jpg"
			style={{
				maxHeight:`calc(100vh - 69px)`,
			}}

		/>
		<div> { children } </div>
		</div>
	)
}


