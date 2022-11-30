import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../redux/Action";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// this is the layout of our quiz stored on "my quiz" page  


export const QuizSection = ({ title, serial, active, id, date, openQuizModal }) => {
  const dispatch = useDispatch();
  const HandleToggle = (id) => {
    dispatch(toggle(id));
  };

  return (
    <>
      <div className="dflex all-quiz">
        <div className="all-quiz-number">{serial}</div>
        <div className="all-quiz-title">
          {title.toUpperCase()}
        </div>
        <div className="dflex all-quiz-active">
          <p>{active ? "Active" : "Inactive"}</p>
          <button
            style={{ backgroundColor: `${active ? "green" : "grey"}` }}
            onClick={() => HandleToggle(id)}
          >
            <div
              className="circle"
              style={{ right: `${active ? "-25px" : 0}` }}
            ></div>
          </button>
        </div>
        <div className="time">
          {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`}
        </div>
        <div className="quiz-delete-icon">
          <DeleteForeverIcon style={{cursor:'pointer'}} onClick={() => openQuizModal(id)}/>
        </div>
      </div>
    </>
  );
};
