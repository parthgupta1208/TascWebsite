import React from 'react'
import { Flip } from 'react-reveal'

const Team = ({member}) => {
    return (
        <>
            <Flip top >
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full h-96 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{
                        backgroundImage: `url(${member.image})`
                    }} ></div>

                    <div className="w-56 -mt-10 overflow-hidden  border-b-2 border-t-2  rounded-lg shadow-lg md:w-64 backdrop-blur-md ">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{member.name}</h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-none   ">
                            <span className="font-bold text-gray-800 dark:text-gray-200">{member.desc}</span>
                            {/* <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-none rounded  focus:outline-none">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </Flip>
        </>
    )
}

export default Team