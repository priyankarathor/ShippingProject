"use client";

import Link from "next\link";
import React from "react";
import {useRouter} from "next\navigation";
import {axios} from "axios"; 

export default function SignupPage(){
    const [user, setUser] = React.useState({
        email:"",
        password:"",
        userName:""
    })

    const onSignup = async () => {

    }

    return(
        <div className="flex flex-col item-center justify-center min-h-screen py-2">
            <h2>Sign Up</h2>
            <hr/>
            <label htmlFor="username">username</label>
            <input
            className="border border-gray-300"
                id="username"
                type="text"
                value={user.userName}
                onChange={(e) =>
                    setUser({ ...user, userName: e.target.value })
                } 
                placeholder="User Name"
                />

            <label htmlFor="email">email</label>
            <input
            className="border border-gray-300"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                } 
                placeholder="User Name"
                />


             <label htmlFor="password">password</label>
            <input
            className="border border-gray-300"
                id="password"
                type="text"
                value={user.password}
                onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                } 
                placeholder="User Name"
                />

            <button className="p-2 mt-3  border border-gray-900 rounded-lg mb-4">Submit</button>

        </div>
    )
}

