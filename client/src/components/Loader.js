import React from 'react'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'


function Loader() {
    return (
        <div className='fixed md:top-0 right-0 left-0  flex-col   w-full h-screen  z-40 text-center flex items-center justify-center overflow-hidden
        text-slate-200 bg-[#000000]
        '>
            <img className=" w-10/12 md:w-6/12 lg:w-2/12 h-auto  " src="/loader.gif" />
            {/* motion-safe:animate-pulse */}
            <p className='p-3 text-2xl tracking-widest  '>
                L<AutoTyping
                    active // <boolean>
                    textRef='oading... ' // <string>
                    writespeed={1000} // <number>
                    deletespeed={700} // <number>
                    delaytowrite={10} // <number>
                    delaytodelete={2000} // <number>
                />

            </p>
        </div>
    )
}

export default Loader