import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
        <Layout>
            <h1>About Matthew Hoffman</h1>
            <p>I am an a seasoned photographer specializing in images of Real Estate.</p>
            <p>I love to bring out the best views of a property and show off its beauty and function</p>
            <p>Need a web developer? <Link to='/contact'>Contact Me</Link></p>
        </Layout>
    )
}

export default AboutPage