import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/hero"
import styled from "styled-components"

const Wrapper = styled.div`
	background-color: #5da2c79e;
	font-size: 1.2em;
	// max-width: 800px;
	margin: 0 auto;
	text-align: center;
	line-height: 1.5;
	padding: 45px 25%;
`

const Title = styled.h2`
	font-size: 2em;
	margin: 0.67em 0;
`

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
	<Wrapper id="about-us">
		<h1>About Us</h1>
		<div>
			<p>
				We are a reputable general construction service provider that delivers quality work including
				framing, drywall, painting, plumbing, and electrical services. With almost 30 years in service
				we have experience with various <em>Home Remodeling & Renovations</em>. We provide services to
				all of the <em>Los Angeles County</em>. No job is too big or too small.
			</p>
		</div>
	</Wrapper>
	
  </Layout>
)

export default IndexPage
