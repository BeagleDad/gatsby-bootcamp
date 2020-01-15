import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const indexPage = () => {
    return (
        <Layout>
            <h1>Hello,</h1>
            <h2>I'm Matthew, a retired Software Engineer living in Sonoma County (for now)</h2>
            <p>Need a web developer? <Link to='/contact'>Contact Me</Link></p>
        </Layout>
    )
}


export default indexPage