import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Mito Construction" />
	<Hero>
		<div
	    		style={{
			position: `absolute`,
			right: `12%`,
			bottom: `4em`,
			left: `12%`,
			backgroundColor: `rgb(0,0,0,.3)`,
			padding: `2em`,
			fontSize: `1.3em`,
			color: `#fff`,
			textAlign: `center`,
		    }}
		>
		<h1>Mito Construction Los Angeles</h1>
		<p>Construction company</p>
		</div>
	</Hero>
  </Layout>
)

export default IndexPage
