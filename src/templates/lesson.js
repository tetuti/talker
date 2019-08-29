import React from 'react'

import Lesson from '../components/lesson'

import Layout from '../components/layout'

const LessonPageTemplate = ({ pageContext }) => {
    const lesson =
        typeof window !== `undefined` ? <Lesson title {...pageContext} /> : null
    return <Layout>{lesson}</Layout>
}

export default LessonPageTemplate
