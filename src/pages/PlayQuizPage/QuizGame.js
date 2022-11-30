import React,{ useState } from 'react'
import img from "../../images/congrats.png";
import QuizCard  from "./QuizCard";
import { useNavigate } from "react-router-dom";
import { getAnswer, resetButton } from "../../redux/Action";
import { useDispatch, useSelector } from "react-redux";


export const Outcome = () => {
    const disptach = useDispatch();
    const results = useSelector((state) => state.reducer.answers);
    const direct = useNavigate();
    const mapped = results.map((x) => x.isCorrect);

    // the reset function will reset our quiz and navigate us to home page

    const reset = () => {
      disptach(resetButton());
      direct("/");
    };
  
    return (
      <div className="dflex outcome-container ">
        <div className="outcome-subcontainer">
          <div className="congrats-img">
            <img src={img} alt="" height={"130px"} width={"200px"} />
            <h3>
              You've scored {mapped.filter((x) => 
              x === true).length} out of{" "}
              {mapped.length}
            </h3>
          </div>
          <div className="dflex reset ">
            <button onClick={() => reset()}>Done</button>
          </div>
        </div>
      </div>
    );
  };

const QuizGame = () => {
  const [count, setcount] = useState(0);
  const [resultCard, setresultCard] = useState(false);
  const [result, setresult] = useState({});

  const quiz = useSelector((state) => state.reducer.playQuiz).questions;
  const question = quiz[count].question;
  const answers = quiz[count].answers;
  const username = useSelector((state) => state.reducer.name);

  const dispatch = useDispatch();
  
  // handles next question
  const next = () => {
    dispatch(getAnswer(result));

    if (count >= quiz.length - 1) {
      setresultCard(true);
      setcount((prev) => prev);
    } else {
      setcount((prev) => prev + 1);
    }
  };

  // handles answer
  const HandleSolution = (answer, correct, id) => {
    const response = {
      answer: answer,
      isCorrect: correct,
      id: id,
    };
    setresult(response);
  };

// it will return our quiz card with options to play

  return (
    <>
        <div className="dflex quiz-container ">
      
      {resultCard ? <Outcome name={username} /> :
      <div className="play-quiz-container-name">
      <QuizCard
        nextButton={next}
        count={count}
        question={question ? question : ""}
        answers={answers}
        HandleSolution={HandleSolution}
        length={quiz.length}
        selectedId={result.id ? result.id : ""}
      />
    </div>}
    </div>
    </>
  )
}

export default QuizGame