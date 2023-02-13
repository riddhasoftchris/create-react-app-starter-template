import React from 'react'
import LoginForm from './LoginForm'

export default function LoginComponent() {
    return (
        <div className="w-full h-screen relative font-sans bg-gradient-to-r from-indigo-800 to-red-800 opacity-75 inset-0 z-0">
            <div className="md:flex  md:items-center md:justify-center w-full h-screen mx-auto my-auto sm:w-auto md:h-full xl:w-2/6 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none flex items-center">
                <LoginForm />
            </div>
        </div>
    )
}