const path = require(`path`)
const { getSlug } = require(`./src/utils`)

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-speech-kit/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    const { data } = await graphql(`
        query {
            allContentfulLesson(limit: 10) {
                edges {
                    node {
                        slug
                        title
                        words {
                            text
                            image {
                                file {
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    data.allContentfulLesson.edges.forEach(edge => {
        const { node } = edge
        const { slug, title, words } = node
        createPage({
            path: `${slug}`,
            component: path.resolve(`./src/templates/lesson.js`),
            context: {
                title: title,
                words: words,
            },
        })
    })
}
