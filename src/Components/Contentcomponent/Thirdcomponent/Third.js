import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Third = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: 'One Butter'
        },
        {
            id: 2,
            checked: false,
            item: 'Dozen Egg'
        },
        {
            id: 3,
            checked: false,
            item: 'One Kg Flour'
        }])

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setItems(listItems)
        localStorage.setItem('groceriesList', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
        localStorage.setItem('groceriesList', JSON.stringify(listItems))
    }

    return (

        <div className='py-6 flex flex-row justify-centeritems-center'>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className='flex flex-row item items-center py-1' key={item.id}>
                            <input className='mx-8 h-4 hover:cursor-pointer' type='checkbox' checked={item.checked} onChange={() => handleCheck(item.id)} />
                            <label className='grow mx-8 font-thin text-2xl text-gray-500 hover:cursor-pointer hover:text-black' onClick={() => handleCheck(item.id)}>{item.item}</label>
                            <FaTrashAlt role='button' tabIndex='0' className='text-4xl text-red-600 hover:text-red-50 hover:bg-red-600 px-2 rounded-full' onClick={() => handleDelete(item.id)}></FaTrashAlt>
                        </li>
                    ))}
                </ul>
            ) : (
                <label className='font-thin text-gray-500 text-7xl'>Your list is empty</label>
            )
            }
        </div>
    )
}

export default Third