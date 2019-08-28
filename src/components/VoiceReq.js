import React, { useState, useReducer } from "react"
//import { useSpeechRecognition } from "react-speech-kit"
import useSpeechRecognition from "../hooks/useSpeechRecognition"

const initialState = []

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_WORD":
      return [...state, payload]
    case "REMOVE_WORD":
      const index = state.indexOf(payload)
      console.log({
        index: index,
        payload: payload,
      })
      return index !== -1
        ? [...state.slice(0, index), ...state.slice(index + 1)]
        : state
    case "CLEAR_WORDS":
      return []
    default:
      return state
  }
}

const VoiceReq = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState("")
  const { listen, listening, stop, supported } = useSpeechRecognition({
    onResult: result => {
      dispatch({ type: "REMOVE_WORD", payload: result })
    },
  })

  const toggle = listening ? stop : () => listen({ lang: "sv-SE" })

  return (
    <>
      {!supported ? (
        <p>
          Oh no, it looks like your browser doesn&#39;t support Speech
          Recognition.
        </p>
      ) : (
        <>
          <h1 onClick={toggle}>{!listening ? "⏺️" : "⏹️"}️</h1>
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
          />
          <button
            onClick={() => {
				dispatch({ type: "ADD_WORD", payload: input })
				setInput('')
			}}
          >
            Lägg till ord
          </button>
          <button onClick={() => dispatch({ type: "CLEAR_WORDS" })}>
            Rensa
          </button>
          {state.length !== 0 && (
            <>
              <h1>Säg</h1>
              {state.map((word, index) => (
                <h2 key={index}>{word}</h2>
              ))}
            </>
          )}
        </>
      )}
    </>
  )
}

export default VoiceReq
