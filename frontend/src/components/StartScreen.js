export default function StartScreen({ startQuiz }) {
  return (
    <div className="container mx-auto px-4 py-20 text-center animate-fade-in">
      <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          Quiz Challenge
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Test your knowledge with our interactive quiz! Earn bonus points for consecutive correct answers.
        </p>
        <button
          onClick={startQuiz}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-12 rounded-2xl
          transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-xl
          flex items-center justify-center gap-2 mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Start Quiz
        </button>
      </div>
    </div>
  );
}