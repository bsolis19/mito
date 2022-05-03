import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/hero.css" 

export default function Hero() {
	return (
		<StaticImage
			src="../images/pexels-tommy-mcgrath-11723568.jpg"
			className="styles.container"
			imgClassName="styles.hero-img"
		/>
	)
}


