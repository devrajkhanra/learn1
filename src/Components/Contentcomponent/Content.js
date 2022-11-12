import { useState } from "react"
import React from 'react'
import First from "./Firstcomponent/First"
import Second from "./Secondcomponent/Second"
import Third from "./Thirdcomponent/Third"


const Content = () => {

    return (
        <div className='flex flex-col justify-center items-center'>
            <First />
            <Second />
            <Third />
        </div>
    )
}

export default Content