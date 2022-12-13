import React, { useState, useEffect } from 'react'
import { Flip } from 'react-reveal'
import Modal from './Modal'

const Post = ({ post }) => {

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const handleEscapePress = (e) => {
            if (e.key === "Escape") {
                setShowModal(false);
            }
        };
        window.addEventListener("keydown", handleEscapePress);

        return () => window.removeEventListener("keydown", handleEscapePress);
    }, []);


    return (
        <>
            <Flip top >
                <div onClick={(e)=>{setShowModal(true)}} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md cursor-pointer" style={{
                        backgroundImage: `url(https://drive.google.com/uc?id=${post.image})`
                    }} ></div>

                    <div className="w-56 -mt-10 overflow-hidden  border-b-2 border-t-2  rounded-lg shadow-lg md:w-64 backdrop-blur-md ">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{post.title}</h3>

                        <div className="flex items-center justify-center px-3 py-2 bg-none   ">
                            {/* <span className="font-bold text-gray-800 dark:text-gray-200">{member.desc}</span> */}
                            {/* <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-none rounded  focus:outline-none">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </Flip>
            {showModal && <Modal post={post} closeModal={setShowModal} />}
        </>
    )
}

export default Post