import React from 'react'
import { useState } from 'react'

const First = () => {
    const [value, setValue] = useState(0)

    const incrementValue = () => setValue(value + 1)
    const decrementValue = () => setValue(value - 1)

    return (
        <div className='py-2 flex flex-row justify-center items-center'>
            <button onClick={decrementValue} className="px-3.5 rounded shadow-lg hover:bg-blue-800 hover:text-blue-100 text-8xl font-thin"> - </button>
            <p className="mx-7 text-9xl font-thin text-gray-500">{value}</p>
            <button onClick={incrementValue} className="px-1 rounded shadow-lg hover:bg-blue-800 hover:text-blue-100 text-8xl font-thin"> + </button>
        </div>
    )
}

export default First