import React from 'react'
import { useState, useEffect } from 'react'
const Dictionary = () => {

    const [word, setWord] = useState('')
    const [word2, setWord2] = useState('')

    useEffect(() => {
        console.log("State Updated " + word)
    }, [word])
    useEffect(() => {
        console.log("State Updated " + word2)
    }, [word2])

    // no dependency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed.
    return (
        <div>
            <input type='text' onChange={(e) => {
                setWord(e.target.value)

            }} />
            <h2>Let's get the definition for {word}</h2>
            <input type='text' onChange={(e) => {
                setWord2(e.target.value)

            }} />
            <h2>Let's get the definition for {word2}</h2>

        </div>
    )
}

export default Dictionary
