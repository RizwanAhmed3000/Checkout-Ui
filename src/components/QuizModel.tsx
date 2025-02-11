import { useState, useEffect } from "react";
import ConfirmationModal from "./close"; // Import the new modal

const questions = [
  {
    question:
      "Which of the following is the most important factor in providing excellent customer service?",
    options: [
      "Ignoring customer complaints",
      "Responding quickly and solving issues efficiently",
      "Selling products without understanding customer needs",
      "Avoiding customer interaction",
    ],
    correctAnswer: "Responding quickly and solving issues efficiently",
  },
  // Add more questions here
];

export default function QuizModal({ onClose }: { onClose: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State for confirmation modal

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    setProgress(((currentQuestion + 1) / questions.length) * 100);
  }, [currentQuestion]);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
      setSelectedAnswer(null);
      setIsSubmitted(false);
    } else {
      onClose();
    }
  };

  const handleAnswerSelection = (option: string) => {
    if (!isSubmitted) {
      setSelectedAnswer(option);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleCancelQuiz = () => {
    setShowConfirmationModal(true); // Show the confirmation modal
  };

  const handleConfirmCancel = () => {
    setShowConfirmationModal(false); // Hide the confirmation modal
    onClose(); // Close the quiz
  };

  const handleCancelCancel = () => {
    setShowConfirmationModal(false); // Hide the confirmation modal
  };

  const getOptionStyle = (option: string) => {
    if (!isSubmitted) {
      // If not submitted, highlight the selected answer
      return option === selectedAnswer ? "bg-blue-500 text-white" : "bg-white";
    } else {
      // If submitted, show correct answer in green and selected incorrect answer in red
      if (option === questions[currentQuestion].correctAnswer) {
        return "bg-green-500 text-white";
      } else if (option === selectedAnswer) {
        return "bg-red-500 text-white";
      } else {
        return "bg-white";
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2 relative">
        {/* Cancel Button */}
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
          onClick={handleCancelQuiz}
        >
          Cancel
        </button>

        <h2 className="text-xl font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`block w-full p-2 border rounded ${getOptionStyle(
                option
              )}`}
              onClick={() => handleAnswerSelection(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <span>Time left: {timeLeft}s</span>
          {!isSubmitted ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              Submit
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
        <div className="mt-4 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showConfirmationModal}
        onConfirm={handleConfirmCancel}
        onCancel={handleCancelCancel}
      />
    </div>
  );
}
