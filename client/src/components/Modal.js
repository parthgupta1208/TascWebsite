import React from 'react'
import { Flip } from 'react-reveal'

const Modal = ({ post, closeModal }) => {
    return (
        <>
            <input type="checkbox" defaultChecked id="my-modal-4" className="modal-toggle" />
            <Flip top >
                <label htmlFor="my-modal-4 " onClick={(e) => { closeModal(false) }} className="modal cursor-pointer backdrop-blur-sm ">



                    <div onClick={(e) => e.stopPropagation()} className="card lg:card-side flex flex-col md:flex-row bg-none shadow-xl relative w-11/12 lg:w-8/12 border-t-2 border-b-2 my-5">
                        <figure className='w-full md:w-1/2' ><img src={`${post.image}`} alt="Album" /></figure>
                        <div className="card-body w-full md:w-1/2">
                            <h2 className="card-title text-base md:text-2xl font-semibold text-center w-fit mx-auto  mb-3 lg:mb-10 ">{post.title}</h2>
                            <p className='text-base md:text-xl' >{post.desc}</p>

                        </div>
                    </div>
                </label>
            </Flip>
        </>
    )
}

export default Modal