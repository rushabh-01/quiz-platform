import React, { useRef } from "react";
import { getName, play } from "../../redux/Action";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"; 

const SelectMyQuiz = ({ title, id }) => {
  const dispatch = useDispatch();
  const specificQuiz = useRef();
  const handleToSelect = () => {
    
    const selected = specificQuiz.current.checked;
    if (!selected) {
      return;
    }

    // using dispatch from redux to play the quiz //

    dispatch(play(id));
  };

  return (
    <div className="dflex select-quiz">
      <input type="radio" ref={specificQuiz}
        onClick={handleToSelect}
      />
      <p>{title}</p>
    </div>
  );
};

const Play = () => {

  //  empty message will display if quiz doesn't exist//

  const emptyMsg = (
  <p className="no-quiz-msg">
    No quiz is created! <Link className="click-here" to="/create-new">Click here</Link> to create new quiz
  </p>
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef();

  const panelGames = useSelector((state) => state.reducer.quiz);
  const HandleName = () => {

    // validation

    if (name.current.value === "") {
      alert("Please provide your name to play!")
      return;
    }

    // routing to quiz page if there happens to be a quiz

    if (panelGames.length > 0) {
      dispatch(getName(name.current.value));
      navigate("/quiz");
    }
  };

  return (
    <div className="play-container">
      <div className="play-subcontainer">
        <div className="play-title">
          <h1>Title of the Quiz</h1>
        </div>

        <div className="quiz-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          ullam deserunt labore perspiciatis praesentium? Perferendis fugit
          excepturi quod, assumenda, tempora eos ad dolore, quos porro a facere
          deleniti. 
        </div>

        <div>
          <div className="quiz-name">
            <label>Enter Your Name</label>
            <input type="text" ref={name} className="name-input" />
          </div>
          <div className="created-quiz">
            {panelGames.length === 0 ? emptyMsg
              : panelGames
                  .filter((x) => x.isActive === true)
                  .map((x,index) => (
                    <SelectMyQuiz title={x.title} key={index} id={x.id} />
                  ))}
          </div>
        </div>

        <div className="submit-name">
          <button onClick={HandleName}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Play;
