import React, { useState, useReducer } from 'react'
import { useSpeechRecognition } from 'react-speech-kit'
import Icon from '@mdi/react'
import { mdiMicrophoneOff, mdiMicrophone } from '@mdi/js'

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ATTEMPT_CHALLENGE':
            if (state.length < 1) return []
            const match = state[0].text.toLowerCase() === payload
            return match ? [...state.slice(1)] : state
        default:
            return state
    }
}

const Lesson = ({ title, words }) => {
    const [wordsToPronounce, dispatch] = useReducer(reducer, [...words])
    const [transcript, setTranscript] = useState('')
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setTranscript(result)
            dispatch({ type: 'ATTEMPT_CHALLENGE', payload: result })
        },
    })
    const CurrentChallenge = challenge => {
        const {
            text,
            image: {
                file: { url },
            },
        } = challenge

        return (
            <figure className='image is-square'>
                <img alt={text} src={url} />
            </figure>
        )
    }

    const toggle = listening ? stop : () => listen({ lang: 'sv-SE' })

    return (
        <>
            <article className='section'>
                <h1 className='title'>{title}</h1>
                <button onClick={toggle} className={`button is-fullwidth is-large ${!listening ? 'is-primary' : 'is-danger'}`}>
                <Icon
                    path={!listening ? mdiMicrophone : mdiMicrophoneOff}
                    size={1}

                    color='white'
                    
                />
                </button>
                <br/>
                <div className={`control ${listening && 'is-loading'}`}>
                    <input
                        value={transcript}
                        className='input'
                        type='text'
                        placeholder='Vad jag hörde...'
                        readOnly
                        disabled
                    />
                </div>
                <br />
                {wordsToPronounce.length > 0 && (
                    <CurrentChallenge {...wordsToPronounce[0]} />
                )}
                <div className='container is-flex'>
                    {wordsToPronounce.length > 0 ? (
                        [...wordsToPronounce].slice(1).map((word, key) => (
                            <figure className='image is-128x128'>
                                <img
                                    key={key}
                                    alt={word.text}
                                    src={word.image.file.url}
                                />
                            </figure>
                        ))
                    ) : (
                        <p>BRA JOBBAT!</p>
                    )}
                </div>
            </article>
        </>
    )
}

export default Lesson
