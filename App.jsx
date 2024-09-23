import React, { useState } from 'react';
import './Quiz.css'

export default function App() {
	const questions = [
		{
			questionText: 'In what year did Doctor Who first start airing?',
			answerOptions: [
				{ answerText: '1960', isCorrect: false },
				{ answerText: '1954', isCorrect: false },
				{ answerText: '1963', isCorrect: true },
				{ answerText: '1969', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of the first episode to ever introduce the Daleks?',
			answerOptions: [
				{ answerText: 'Dalek', isCorrect: false },
				{ answerText: 'The Daleks', isCorrect: true },
				{ answerText: 'The Dalek Invasion of Earth', isCorrect: false },
				{ answerText: 'Genesis of the Daleks', isCorrect: false },
			],
		},
		{
			questionText: "What is the Brigadier's full name?",
			answerOptions: [
				{ answerText: 'Fred Gorgan Lethbridge-Stewart', isCorrect: false },
				{ answerText: 'Alistair Gordon Lethbridge-Stewart', isCorrect: true },
				{ answerText: 'Gregory Von Gordon Lethbridge-Stewart', isCorrect: false },
				{ answerText: 'Alexander Gorgon Lethbridge-Stewart', isCorrect: false },
			],
		},
		{
			questionText: 'What planet do the Daleks originate from?',
			answerOptions: [
				{ answerText: 'Gallifrey', isCorrect: false },
				{ answerText: 'Blathereen', isCorrect: false },
				{ answerText: 'Earth', isCorrect: false },
				{ answerText: 'Skaro', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
    <div className='container'>
    <h1>Doctor Who Trivia Quiz</h1>
    <hr></hr>
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
            <br></br>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
<br></br>
          <div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
				</>
			)}
		</div>
    </div>
	);
}
