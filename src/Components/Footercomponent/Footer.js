import React from 'react'

const Footer = () => {
    const today = new Date()
    return (
        <footer className='flex flex-row justify-center items-center'>
            <h3>App &copy; {today.getFullYear()}</h3>
        </footer>
    )
}

export default Footer