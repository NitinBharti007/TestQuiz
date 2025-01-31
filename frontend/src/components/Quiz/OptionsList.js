import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function OptionsList({ options, handleAnswer }) {
  const [selected, setSelected] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Shuffle options when question changes
  useEffect(() => {
    const shuffled = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffled);
  }, [options]);

  const handleClick = (option) => {
    if (selected !== null) return;
    setSelected(option);

    setTimeout(() => {
      handleAnswer(option.is_correct);
      setSelected(null);
    }, 1500);
  };

  return (
    <div className="grid gap-4">
      {shuffledOptions.map((option, index) => {
        const isSelected = selected?.id === option.id;
        const isCorrect = option.is_correct;

        return (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleClick(option)}
            disabled={selected !== null}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              !selected 
                ? 'bg-white/10 hover:bg-white/20' 
                : isSelected 
                  ? (isCorrect ? 'bg-green-500/90' : 'bg-red-500/90')
                  : (isCorrect ? 'bg-green-500/50' : 'bg-white/10')
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-yellow-400">
                {String.fromCharCode(65 + index)}.
              </span>
              <span className="text-gray-100">{option.description}</span>
              {isSelected && (
                <span className="ml-auto">
                  {isCorrect ? '✅' : '❌'}
                </span>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}