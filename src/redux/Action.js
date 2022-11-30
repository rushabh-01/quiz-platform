// action type are implemented in this component

export const TYPE = {
    ANSWER: "ANSWER",
    PLAY: "PLAY",
    NAME: "NAME",
    SWITCH: "SWITCH",
    DELETE: "DELETE",
    RESET: "RESET",
    ADD: "ADD",
  };
  
  export const getAnswer = (ans) => {
    return {
      type: TYPE.ANSWER,
      payload: ans,
    };
  };
  
  export const toggle = (id) => {
    return {
      type: TYPE.SWITCH,
      payload: id,
    };
  };
  
  export const getName = (name) => {
    return {
      type: TYPE.NAME,
      payload: name,
    };
  };

  export const adding = (data) => {
    return {
      type: TYPE.ADD,
      payload: data,
    };
  };
  
  export const play = (id) => {
    return {
      type: TYPE.PLAY,
      payload: id,
    };
  };

  export const remove = (id) => {
    return {
      type: TYPE.DELETE,
      payload: id,
    };
  };

  export const resetButton = () => {
    return {
      type: TYPE.RESET,
    };
  };
  