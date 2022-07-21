import React from 'react';
import User from './User'
import { useState, useEffect } from 'react';


export default function DisplayUser() {
    const [userData, setUserData] = useState([])
    const data = ['jhj', 'hjghl']
    useEffect(() => {
        fetch('users.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(data => {
            setUserData(data)
        })
    }, [])
    console.log("rendering")
    return (
        <>
            {
                userData.map((user, key) => {
                    return (
                        <User data={user} key={key} />
                    )
                })
            }
        </>
    )
}