const path = require(`path`)

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
                        id
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
        const { id, title, words } = node
        createPage({
            path: `${getSlug(title)}`,
            component: path.resolve(`./src/templates/lesson.js`),
            context: {
                id: id,
                title: title,
                words: words,
            },
        })
    })
}
