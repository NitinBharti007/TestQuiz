import ProgressBar from '../Layout/ProgressBar';
import ScoreCard from '../Layout/ScoreCard';
import OptionsList from './OptionsList';

export default function QuestionCard({ questionData, current, total, score, streak, handleAnswer, streakBonus }) {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
        <ProgressBar current={current} total={total} />
        
        <ScoreCard score={score} streak={streak} streakBonus={streakBonus} />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            {questionData.description}
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Category: <span className="font-bold text-yellow-400">{questionData.topic}</span>
          </p>
        </div>

        <OptionsList 
          options={questionData.options}
          handleAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}