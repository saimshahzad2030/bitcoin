import React from 'react'

const UnChangeAblePrices = ({
    value,
    color,
    text, 
}) => {
    return (
        color ? 
        <div className="flex flex-col items-center justify-between h-auto w-full ">
            <div className={`w-10/12 h-[2px] bg-${color}`}></div>
            <div className="mt-4 w-10/12 flex-col items-center  py-4 border border-black">
                <h2 className="text-center text-lg">{text}{value}</h2>
            </div>
        </div> 
        
        : 
        
        <div className="mt-8 sm:mt-8 flex flex-col items-center justify-end h-auto w-full">
            <div className="mt-4 w-10/12 flex-col items-center  border border-black py-4">
                <h2 className="text-center text-xl">
                    {text}{value}
                </h2>
            </div>
        </div>
    )
}

export default UnChangeAblePrices