'use client'
import QuizModal from '@/components/QuizModel';
import React, { useState } from 'react'

const page = () => {
   const [isQuizOpen, setIsQuizOpen] = useState(false);

   return (
     <div className="flex justify-center items-center h-screen">
       <button
         className="bg-blue-500 text-white px-4 py-2 rounded"
         onClick={() => setIsQuizOpen(true)}
       >
         Start Quiz
       </button>
       {isQuizOpen && <QuizModal onClose={() => setIsQuizOpen(false)} />}
     </div>
   );
}

export default page