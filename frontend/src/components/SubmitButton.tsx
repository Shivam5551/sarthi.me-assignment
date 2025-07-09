'use client'

import { useFormStatus } from "react-dom"

export default function Button() {
    const { pending } = useFormStatus()
    return (
        <button disabled={pending} className="transform cursor-pointer text-white w-full text-xs p-1 sm:text-base font-semibold duration-500 transition-all rounded-md hover:rounded-xl bg-blue-500 hover:bg-blue-700 flex justify-center items-center">{pending ? <span className="h-5 w-5 border-b rounded-full animate-spin border-2 my-2 border-b-red-500"></span> : "Analyze Emotion"}</button>
    )
}