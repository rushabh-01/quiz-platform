import { TYPE } from "./Action";

const initialState = {
  name: "",quiz: [],answers: [],playQuiz: [],
};

// all the functions are implemented in the reducer to manage state

export const reducer = (state=initialState,actions) => {

  if (actions.type === TYPE.SWITCH) {
    const element = state.quiz.find((x) => x.id === actions.payload);

    const filteredArr = state.quiz.filter((x) => x.id !== actions.payload);

    const newArr = [
      {...element, isActive: !element.isActive},
      ...filteredArr,
    ];

    return {
      ...state,
      quiz: newArr,
    };
  }

  if (actions.type === TYPE.DELETE) {
    const filteredArr = state.quiz.filter((x) => x.id !== actions.payload);

    return {
      ...state,
      quiz: filteredArr,
    };
  }

  if (actions.type === TYPE.ANSWER) {
    return {
      ...state,
      answers: [...state.answers, actions.payload],
    };
  }

  if (actions.type === TYPE.ADD) {
    return {...state, quiz:[...state.quiz, actions.payload] };
  }

  if (actions.type === TYPE.PLAY) {
    const element = state.quiz.find((x) => x.id === actions.payload);

    return {
      ...state,
      playQuiz: element,
    };
  }

  if (actions.type === TYPE.RESET) {
    return {
      ...state,
      name: "",
      playQuiz: [],
      answers: [],
    };
  }

  if (actions.type === TYPE.NAME) {
    return {
      ...state,
      name: actions.payload,
    };
  }
  return state;
};
