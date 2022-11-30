import React from "react";

// it will display answers to our quiz game

const Solution = ({ id, answer, correct, HandleSolution, selectedId }) => {
  const click = () => {
    HandleSolution(answer, correct, id);
  };
  return (
    <div className="option-box" onClick={click}
      style={{ background: `${selectedId === id ? "lightgreen" : " "}` }}
    ><p>{answer}</p>
    </div>
  );
};

const QuizCard = ({
  HandleSolution,
  count,
  answers,
  length,
  question,
  selectedId,
  nextButton,
}) => {
  return (
    <>
      <div className="questions">
        <div className="question-subcontainer">
          {count + 1}. {question}
        </div>
        <p style={{textAlign:'center',color:'lightPink'}}>Select one option from below !</p>
        <div className="options">
          {answers.map((x) => (
            <Solution
              key={x.id}
              HandleSolution={HandleSolution}
              id={x.id}
              selectedId={selectedId}
              answer={x.answer}
              correct={x.correct}
            />
          ))}
        </div>
        <div className="quiz-next-btn">
          <div className="quiz-question-no">
            Question {count + 1}/{length}
          </div>
          
          <div className="next-question">
          <button disabled={!selectedId} onClick={nextButton}>Next Question</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
