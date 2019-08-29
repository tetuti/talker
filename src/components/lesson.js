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
    const [state, dispatch] = useReducer(reducer, [...words])
    const [transcript, setTranscript] = useState('')
    const { listen, listening, stop } = useSpeechRecognition({
        onResult: result => {
            setTranscript(result)
            dispatch({ type: 'ATTEMPT_CHALLENGE', payload: result })
        },
    })

    const toggle = listening ? stop : () => listen({ lang: 'sv-SE' })

    return (
        <>
            <section className='section'>
                <h1 className='title'>{title}</h1>
                <Icon
                    path={!listening ? mdiMicrophone : mdiMicrophoneOff}
                    size={5}
                    onClick={toggle}
                />
                <div className={`control ${listening && 'is-loading'}`}>
                    <input
                        value={transcript}
                        className='input'
                        type='text'
                        placeholder='Vad jag hörde...'
                        readOnly
                    />
                </div>
                <hr />
                <div className='container columns'>
                    {state.length > 0 ? (
                        state.map((word, key) => (
                            <div key={key} className='column is-2'>
                                <img
                                    style={{ width: '100%', height: 'auto' }}
                                    alt={word.text}
                                    src={word.image.file.url}
                                />
                            </div>
                        ))
                    ) : (
                        <p>BRA JOBBAT!</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Lesson
