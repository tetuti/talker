import React, { useState, useEffect } from 'react'
import { createClient } from 'contentful'

import Layout from '../components/layout'

const WordPreviewPage = () => {
	const [word, setWord] = useState(null)
	const client = createClient({
		space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
		accessToken: process.env.GATSBY_CONTENTFUL_PREVIEW_TOKEN,
		host: `preview.contentful.com`
	})

	useEffect(() => {
		const url = new URL(window.location.href)
		const token = url.searchParams.get('token')
		if (token) {
			client.getEntry(token).then(entry => setWord(entry))
		}
	}, [])

    return (
        <Layout>
            <section className='section'>
				{JSON.stringify(word)}
            </section>
        </Layout>
    )
}

export default WordPreviewPage
