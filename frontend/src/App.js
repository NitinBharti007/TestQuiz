import { useState } from "react";
import axios from "axios";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/Quiz/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";
import ConfettiOverlay from "./components/ConfettiOverlay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "https://testquiz-5ydd.onrender.com/api/quiz";

export default function App() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [baseScore, setBaseScore] = useState(0); // 10 per correct answer
  const [streakBonus, setStreakBonus] = useState(0); // 2 per streak level
  const [gameStatus, setGameStatus] = useState("idle");
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [maxStreak, setMaxStreak] = useState(0); // New state for max streak

  const fetchQuizData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(API_URL);

      // Check if data exists and has questions
      if (!data || !data.questions || data.questions.length === 0) {
        toast.error("No quiz data available or invalid format.");
        setGameStatus("idle");
        return;
      }

      // Set the quiz data directly
      setQuizData(data);
      setGameStatus("playing");
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Failed to load quiz. Please try again!");
      setGameStatus("idle");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      // Calculate points
      const basePoints = 10;
      const bonusPoints = 2 * streak; // Streak bonus based on current streak

      // Update scores

      setBaseScore((prev) => prev + basePoints);
      setStreakBonus((prev) => prev + bonusPoints);
      setScore((prev) => prev + basePoints);

      // Update streak
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);

      toast.success(
        `Earned ${basePoints} points + ${bonusPoints} streak bonus!`
      );
    } else {
      setStreak(0);
      toast.error("Wrong answer! Streak reset");
    }

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setGameStatus("finished");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setStreak(0);
    setStreakBonus(0);
    setGameStatus("playing");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      <ToastContainer position="top-center" autoClose={2000} />

      {gameStatus === "idle" && !isLoading && (
        <StartScreen startQuiz={fetchQuizData} />
      )}

      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      {gameStatus === "playing" && quizData && (
        <QuestionCard
          questionData={quizData.questions[currentQuestion]}
          current={currentQuestion + 1}
          total={quizData.questions.length}
          score={score}
          streak={streak}
          streakBonus={streakBonus}
          handleAnswer={handleAnswer}
        />
      )}

      {gameStatus === "finished" && (
        <>
          <ConfettiOverlay />
          <ResultsScreen
            baseScore={baseScore}
            streakBonus={streakBonus}
            totalQuestions={quizData.questions.length}
            maxStreak={maxStreak}
            restartQuiz={restartQuiz}
          />
        </>
      )}
    </div>
  );
}
