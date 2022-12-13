import axios from 'axios'
import React from 'react'
import memberData from './Constant/TeamData'
import postData from './Constant/Event'


const Script = () => {

    const handleMembers = () => {
        memberData.map(async (member, key) => {

            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "name": member.name,
                "usn": member.usn,
                "desc": member.desc,
                "image": member.image
            });

            let reqOptions = {
                url: "http://localhost:8080/CoreMembers/create",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            let response = await axios.request(reqOptions);
            console.log(response);
        })
    }

    const handlePost = () => {
        postData.map(async (member, key) => {

            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
            }

            let bodyContent = JSON.stringify({
                "title": member.title,
                "desc": member.desc,
                "image": member.image
            });

            let reqOptions = {
                url: "http://localhost:8080/post/create",
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }
            let response = await axios.request(reqOptions);
            console.log(response);
        })
    }


    return (
        <>
            <button onClick={handleMembers} className='text-white p-7 bg-red-400' >
                ADD members
            </button>
            
            <button onClick={handlePost} className='text-white p-7 bg-red-400' >
                ADD post
            </button>
            

        </>)
}

export default Script