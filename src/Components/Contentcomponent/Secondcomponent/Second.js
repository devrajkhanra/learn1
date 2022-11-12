import React from 'react'
import { useState, useEffect } from 'react'
import moment from 'moment/moment'

const Second = () => {
    const [newDate, setnewDate] = useState(moment().format('LL'))
    const [counter, setCounter] = useState(0)

    const incrementnewDate = () => setCounter(counter + 1)

    const decrementnewDate = () => setCounter(counter - 1)

    const resetNewDate = () => {
        setnewDate(moment().format('LL'))
        setCounter(0)
    }

    useEffect(() => {
        if (counter + 1) {
            setnewDate(moment().add(counter, 'days').format('LL'))
        }
        if (counter - 1) {
            setnewDate(moment().add(counter, 'days').format('LL'))
        }
    }, [counter]);

    return (
        <div className='py-6 flex flex-row justify-center items-center'>
            {/* Date */}
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <button onClick={decrementnewDate} className="px-3.5 h-24 rounded-l-full shadow-lg hover:bg-blue-800 hover:text-blue-100 text-8xl font-thin">-</button>
                    <p className="px-10 text-3xl font-thin text-gray-500">{newDate}</p>
                    <button onClick={incrementnewDate} className="px-1 h-24 rounded-r-full shadow-lg hover:bg-blue-800 hover:text-blue-100 text-8xl font-thin">+</button>
                </div>
                <button onClick={resetNewDate} className="h-24 px-10 rounded shadow-lg hover:bg-blue-800 hover:text-blue-100 text-2xl font-thin"> Reset </button>
            </div>
        </div >
    )
}

export default Second