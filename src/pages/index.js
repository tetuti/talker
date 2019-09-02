import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import { getSlug } from '../utils'

const IndexPage = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allContentfulLesson(limit: 10) {
                    edges {
                        node {
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
                    const { title } = node
                    return <Link to={`/${getSlug(title)}`}>{title}</Link>
                })}
            </section>
        </Layout>
    )
}

export default IndexPage
