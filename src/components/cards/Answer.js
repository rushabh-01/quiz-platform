import React from "react";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

// this answer component displays answer form 

export const Answer = ({id,para, correctAnswer, handleDelete }) => {
  return (
    <div className="answer-main">
      <div className="answerCard">
        <p>{para}</p>
        <DeleteForeverIcon onClick={() => handleDelete(id)}/>
      </div>
      <div
        className="answer-correct"
        style={{ background: `${correctAnswer ? "lightgreen" : "lightgrey"}` }}
      >
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            checked={correctAnswer ? true : false}
          />
          <p>correct</p>
        </div>
      </div>
    </div>
  );
};
