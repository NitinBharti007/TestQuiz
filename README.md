# QuizMaster - Interactive Quiz Application



![Project Screenshot](../assets/Home.png)

**Loom Video Link**
[Project Video](https://www.loom.com/share/c057ecb1ae8e420790e67bfea54ccf50?sid=98e7da78-71d5-4cc5-a6ea-269c33899af2)


QuizMaster is a modern, web-based quiz application designed to provide an engaging and interactive user experience. It features gamification elements like streaks, scoring, and animations to make learning fun and competitive.

---

## Features

### Core Features
- 🚀 **Start Quiz**: Begin the quiz with an interactive welcome screen.
- 📝 **Multiple-Choice Questions**: Answer questions with shuffled options.
- ⚡ **Real-Time Scoring**: Earn points for correct answers.
- 🔥 **Streak Bonuses**: Get bonus points for consecutive correct answers.
- 📊 **Progress Bar**: Track your progress through the quiz.
- 🎉 **Confetti Animation**: Celebrate when you complete the quiz.
- 📈 **Results Summary**: View your score, percentage, and streak after completing the quiz.
- 📱 **Responsive Design**: Works seamlessly on all devices.

### Gamification
- **Streak Counter**: Track consecutive correct answers.
- **Bonus Points**: Earn extra points for maintaining streaks.
- **Visual Feedback**: Animations and notifications for correct/incorrect answers.

### Technical Features
- **API Integration**: Fetches quiz data from a REST API.
- **Error Handling**: Gracefully handles API failures and invalid data.
- **Animations**: Smooth transitions and animations using Framer Motion.
- **Toast Notifications**: Real-time feedback using react-toastify.

---

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **Framer Motion**: Animation library for smooth transitions.
- **react-confetti**: Adds confetti animation for celebrations.
- **react-icons**: Provides icons for the UI.
- **react-toastify**: Displays toast notifications for feedback.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quizmaster.git
   cd quizmaster
2. **Install dependencies**:
   ```bash
   npm install
3. **Start the sever**:
   ```bash
   nodemon index.js
4. **Start the development**:
   ```bash
   npm start
5. **Open the app**:
   ```bash
   http://localhost:3000

## Usage

1. **Start the Quiz**: Click the "Start Quiz" button on the welcome screen.

2. **Answer Questions**: Read the question and select one of the multiple-choice options. Earn 10 base points for each correct answer**. Get bonus points for maintaining a streak of correct answers.

3. **Track Progress**: Use the progress bar to see how many questions are left. Check your current score and streak in the scorecard.
   
4. **View Results**: After completing all questions, see your total score, percentage, and streak. Celebrate with confetti animation!

5. **Restart Quiz**: Click the "Play Again" button to restart the quiz with new questions.

## Error Handling

If the API fails to load, the app displays an error message. If the API returns invalid data, the app gracefully handles it and notifies the user.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- **Quiz API**: Provided by JSONServe.
- **Animations**: Powered by Framer Motion.
- **Confetti**: Created using react-confetti.
- **Icons**: Sourced from react-icons.

## Contact

For questions or feedback, feel free to reach out:
**Email**: dev.nitin63@gmail.com
**GitHub**: NitinBharti007
