import React,{useState} from 'react'
import InputForm from './InputForm';

// this component returns the model to begin quiz 

const CreateModal = ({modal}) => {
  return (
    <>
    <div className=" dflex create-Modal ">
      <div className="dflex mcq-container ">
        <button className="mcq-btn" onClick={modal}>
          MCQ (Single Correct)
        </button>
      </div>
    </div>
    </>
  )
}

const CreateNew = () => {
  // to "create new button" with modal

  const [Show, setShow] = useState(true);

  const modal = () => {
    setShow(false);
  };

  return (
    <div>
      {Show ? (
        <CreateModal modal={modal} />) : (<InputForm />)}
    </div>
  );
};

export default CreateNew