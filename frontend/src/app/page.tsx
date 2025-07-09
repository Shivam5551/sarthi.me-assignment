'use client'
import { LabelledInputBox } from "@/components/labeledInputBox";
import { OutputCard } from "@/components/outputCard";
import Button from "@/components/SubmitButton";
import { UserTextarea } from "@/components/userTextarea";
import { useState } from "react";
import { toast } from "react-toastify";

function toastError(message: string): void {
  toast.error(message, {
    autoClose: 4000,
    draggable: true,
    pauseOnHover: true,
    theme: "colored"
  });
}

export default function Home() {
  const [emotion, setEmotion] = useState<string>('')
  const [confidence, setConfidence] = useState<number>()
  const submitForm = async (form: FormData) => {
    const data = form.get("data")
    const name = form.get("Name")
    if (!name) {
      toastError("Name is required!")
      return;
    }
    if (!data) {
      toastError("Message is required!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/',
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          body: form
        }
      )
      if (response.ok) {
        const res = await response.json()
        if (res.emotion && res.confidence) {
          setEmotion(res.emotion)
          setConfidence(res.confidence)
          setTimeout(()=> {
            setEmotion('')
            setConfidence(0)
            toast.info("Cleaning...", {
              theme: "colored",
              autoClose: 4000,
              pauseOnHover: true
            })
          }, 10000)
          return;
        }
      }
    } catch (error) {
      console.log("Backend response error:", error)
      toastError("Unable to analyze emotion!")
    }


  }
  return (
    <div className="bg-neutral-200 p-10 flex flex-col min-w-screen min-h-screen overflow-y-auto overflow-x-hidden justify-center items-center">
      <div className="max-w-lg min-w-full p-10 sm:p-0 lg:min-w-lg md:min-w-sm space-y-4">
        <form action={submitForm} className="bg-white space-y-4 p-4 rounded-xl shadow-xl">
          <h1 className="sm:text-xl w-full text-base font-bold flex justify-center items-center">Emotion Analyzer</h1>
          <LabelledInputBox type="text" id="name" name="Name" placeholder="Enter your name" />
          <UserTextarea id="data" name="data" label="Message" placeholder="Write your thoughts here..."/>
          <Button />
        </form>
        {!!emotion && !!confidence && <OutputCard emotion={emotion} confidence={confidence} />}
      </div>
    </div>
  );
}
