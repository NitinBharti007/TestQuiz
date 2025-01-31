import { motion } from 'framer-motion';

export default function ScoreCard({ score, streak, streakBonus }) {
  return (
    <motion.div
      className="flex items-center justify-between mb-8 p-4 bg-white/5 rounded-xl"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-emerald-500/20 rounded-lg">
          <span className="text-2xl font-bold text-emerald-400">⭐ {score + streakBonus}</span>
        </div>
        <div>
          <p className="text-sm text-gray-300">Total Score</p>
          <p className="text-xs text-gray-400">
            {streak > 0 ? `${streak}x Combo!` : ' '}
          </p>
        </div>
      </div>

      {streak > 0 && (
        <div className="flex items-center gap-2 text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
          <span className="font-bold">x{streak} Streak</span>
        </div>
      )}
    </motion.div>
  );
}