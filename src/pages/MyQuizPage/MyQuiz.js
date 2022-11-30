import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/Action";
import {Link} from "react-router-dom"
import { QuizSection } from "./Quiz";

// this delete modal will help delete entire quiz section from my quizes

const DeletePopup = ({ closeDeleteModal, id }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(remove(id));
    closeDeleteModal();
  };

  return (
    <div className="dflex delete">
      <div className="delete-subcontainer">
        <div className="delete-header">
          <h2>Are you sure you want to Delete</h2>
          <p>
            Deleting this will result in loosing the file permanently and is not recoverable
          </p>
          <div className="delete-feature">
            <button onClick={() => handleDelete(id)}>Yes
            </button>
            <button onClick={() => closeDeleteModal()}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// here is where we will store all the quizes we created

// we can also control few features like activate and deactivate

const MyQuiz = () => {
  const [modal, setmodal] = useState(false);
  const [deleteId, setdeleteId] = useState(0);
  const Quiz = useSelector((state) => state.reducer.quiz);

  const openDeleteModal = (id) => {
    setdeleteId(id);
    setmodal(true);
  };
  const closeDeleteModal = () => {
    setmodal(false);
  };

  return (
    <>
      {modal ? <DeletePopup closeDeleteModal={closeDeleteModal} id={deleteId} /> : 
            <div
            className="dflex quiz-container"
          >
            <div className="my-quiz-main">
              <div className="my-quiz-header ">
                <div className="my-quiz-head">
                  <h1>My Quizes</h1>
                </div>
                <div className="create-new-btn">
                  <Link to="/create-new">
                    <button className="create-new-button">Create New Quiz</button>
                  </Link>
                </div>
              </div>
    
              <div className="all-quiz-main">
              <div className="dflex all-quiz">
              <table>
                  <tr>
                    <td className="all-quiz-number bold">Quiz no</td>
                    <td className="all-quiz-title bold">Title</td>
                    <td className="dflex all-quiz-active bold">Status</td>
                    <td className="time bold">Created on</td>
                    <td className="quiz-delete-icon bold">Action</td>
                  </tr>
                </table>
              </div>

                {Quiz.length === 0 ? (
                  <p style={{ color: "red" }}>As of now there are no quizes!</p>
                ) 
                : 
                (
                  Quiz.map((quiz, i) => (
                    <>
                    <QuizSection
                      key={quiz.id}
                      active={quiz.isActive}
                      date={quiz.createdOn}
                      title={quiz.title}
                      openQuizModal={openDeleteModal}
                      serial={i + 1}
                      id={quiz.id}
                    />
                    <br></br>
                   </>
                  ))
                )}
              </div>
            </div>
          </div>
          }
    </>
  );
}

export default MyQuiz