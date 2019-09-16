import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulLesson(limit: 10) {
                    edges {
                        node {
                            slug
                            title
                        }
                    }
                }
            }
        `
    )
    return (
        <Layout>
            <section className='section'>
                <h1 className='title'>Välkommen till LOGOPEDIA!</h1>
                {data.allContentfulLesson.edges.map(edge => {
                    const { node } = edge
                    const { slug, title } = node
                    return (
                    <div>
                        <Link to={`/${slug}`}>{title}</Link>
                    </div>
                    )
                })}
            </section>
        </Layout>
    )
}

export default IndexPage
