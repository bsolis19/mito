import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Hero from "../components/hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Mito Construction" />
	<Hero />
  </Layout>
)

export default IndexPage
