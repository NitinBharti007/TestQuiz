export default function ProgressBar({ current, total }) {
  // Ensure total is never 0 to avoid division by 0 errors
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm mb-2">
        <span>Question {current} of {total}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-3 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
          aria-label={`Progress: ${Math.round(progress)}%`} // Accessibility improvement
        />
      </div>
    </div>
  );
}
