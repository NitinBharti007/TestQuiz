import { motion } from 'framer-motion';

export default function ResultsScreen({ baseScore, streakBonus, totalQuestions, maxStreak, restartQuiz }) {
  const totalScore = baseScore + streakBonus;
  const maxBaseScore = totalQuestions * 10;

  return (
    <motion.div 
      className="container mx-auto px-4 py-20 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Quiz Results
        </h2>

        {/* Score Breakdown */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-emerald-500/20 p-4 rounded-xl">
            <div className="text-2xl font-bold text-emerald-400">{baseScore}/{maxBaseScore}</div>
            <p className="text-sm text-emerald-200">Base Points</p>
            <p className="text-xs text-emerald-300">(10 per question)</p>
          </div>
          
          <div className="bg-amber-500/20 p-4 rounded-xl">
            <div className="text-2xl font-bold text-amber-400">+{streakBonus}</div>
            <p className="text-sm text-amber-200">Streak Bonus</p>
            <p className="text-xs text-amber-300">(2x streak level)</p>
          </div>
        </div>

        {/* Total Score */}
        <div className="bg-purple-500/20 p-4 rounded-xl mb-8">
          <div className="text-3xl font-bold text-purple-400">{totalScore} Points</div>
          <p className="text-sm text-purple-200">Total Score</p>
        </div>

        {/* Streak Information */}
        <div className="bg-yellow-500/20 p-4 rounded-xl mb-8">
          <div className="text-2xl font-bold text-yellow-400">🔥 {maxStreak}x</div>
          <p className="text-sm text-yellow-200">Maximum Streak</p>
        </div>

        {/* Restart Button */}
        <button
          onClick={restartQuiz}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl
          transform transition-all duration-300 hover:scale-105"
        >
          Play Again
        </button>
      </div>
    </motion.div>
  );
}