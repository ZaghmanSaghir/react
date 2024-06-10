import React from 'react';
import DefinitionSearch from '../components/DefintionSearch';

const Dictionary = () => {

    return (
        <div className='flex justify-center'>
            <DefinitionSearch />
        </div>

    )


    // const [word2, setWord2] = useState('')

    // useEffect(() => {
    //     console.log("State Updated " + word)
    // }, [word])
    // useEffect(() => {
    //     console.log("State Updated " + word2)
    // }, [word2])

    // no dependency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed.

}

export default Dictionary
