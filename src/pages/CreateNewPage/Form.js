import React, { useState, useRef, useEffect } from "react";
import { Answer } from "../../components/cards/Answer";
import { useDispatch } from "react-redux";
import { adding } from "../../redux/Action";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [count, setcount] = useState(1);
  const [answerSize, setanswerSize] = useState(false);
  const [answers, setanswers] = useState([]);
  const [add, setAdd] = useState(false);
  const [question, setQuestion] = useState([]);

  // for setting timeout

  useEffect(() => {
    const timeOutForAdd = setTimeout(() => {
      if (add) {
        setAdd(false);
      }
    }, 2000);

    const timeOutForAnswerSize = setTimeout(() => {
      if (answerSize) {
        setanswerSize(false);
      }
    }, 2000);

    return () => {
      clearTimeout(timeOutForAdd);
      clearTimeout(timeOutForAnswerSize);
    };
  }, [add, answerSize]);

  // useRef is used to retrieve data //

  const correctRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const titleRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const descriptionRef = useRef();



  //  these handlers helps to get user data and manage state //

  const HandleOption = (e) => {
    e.preventDefault();

    if (answerRef.current.value === "") {
      return;
    }

    if (answers.length >= 4) {
      setanswers((prev) => [...prev]);
    } else {
      const Answer = {
        answer: answerRef.current.value.toUpperCase(),
        correct: correctRef.current.checked,
        id: Math.random() * 10,
      };

      setanswers((prev) => [...prev, Answer]);
    }

    answerRef.current.value = "";
    correctRef.current.checked = false;
  };

  const HandleQuestion = (e) => {
    e.preventDefault();


    if (questionRef.current.value === "" || answers.length === 0) {
      questionRef.current.value = "";
      return;
    }

    if (answers.length > 2) {
      const Question = {
        question: questionRef.current.value,
        answers: answers,
        id: count,
      };

      setcount((prev) => prev + 1);
      setQuestion((prev) => [...prev, Question]);
      setanswers([]);
      setAdd(true);
      questionRef.current.value = "";
    } else {
      setanswerSize(true);
    }


  };

  const HandleSave = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const descValue = descriptionRef.current.value;

    if (titleValue === "" || question.length <= 0) {
      return;
    }

    const Quiz = {
      isActive: true,
      title: titleValue,
      id: Math.random(),
      createdOn: new Date(),
      description: descValue,
      questions: question,
    };

    dispatch(adding(Quiz));
    setcount(1);
    navigate("/play-quiz");
    titleRef.current.value = "";
  };

  const handleDelete  = (id) => {
    const filteredArray = answers.filter((x) => x.id !== id);
    setanswers(filteredArray);
  };

  return (
    <div
      className="form-main-content"
    >
      <div className="form">
        <form action="">
          <div className="top-form">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="title-input"
              ref={titleRef}
            />

            <input
              type="text"
              className="description-input"
              placeholder="Add Description"
              ref={descriptionRef}
            />
          </div>

          <div className="bottom-form">
            <label style={{fontWeight: "500" }}>
              {" "} Question {count}
            </label>
            <input type="text " className="title-input" ref={questionRef} />
            {add && (
              <p style={{ color: "green" }}>
                Your question has been added !
              </p>
            )}
            {answerSize && (
              <p style={{ color: "red" }}
              >
                there should be more than 2 options to the answers !
              </p>
            )}
          </div>

          <div className="form-submit dflex">
            {answers.map((x, i) => (
              <Answer
                para={x.answer}
                id={x.id}
                key={i}
                correctAnswer={x.correct}
                handleDelete ={handleDelete }
              />
            ))}
          </div>

          <div className="dflex answer-input ">
            <div className="dflex main-inputs" style={{gap:20}}>
              <input
              style={{textAlign:'center'}}
                placeholder="answer"
                type="text"
                className="answer"
                ref={answerRef}
              />
            </div>
            <div className="dflex main-features">
            <div className="check-box">
              <input type="checkbox" name="correct" id="" ref={correctRef} />
            </div>
            <label style={{ fontSize: "12px" }}>correct</label>
            <button className="add-option" onClick={HandleOption}>+
            </button>
            </div>
          </div>
        </form>
      </div>

      <div className="save dflex">
        <button onClick={HandleQuestion}>Add Question </button>
        <button onClick={HandleSave}>Save</button>
      </div>
    </div>
  );
};
