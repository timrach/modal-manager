import React, { useReducer, useContext, createContext } from "react";
export const ModalContext = createContext();

const initialState = {
  modals: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        modals: [...state.modals, action.modal]
      };
    case "HIDE_MODAL":
      return {
        modals: state.modals.filter(
          contact => contact.key !== action.key
        )
      };
    default:
      throw new Error();
  }
};

const ModalDisplay = () => {
  const {state} = useContext(ModalContext);

  return (
    <div>
        {state.modals.map((modal) => modal)}
    </div>
  );
}

export const ModalContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={{state, dispatch}}>
      <ModalDisplay/>
      {props.children}
    </ModalContext.Provider>
  );
};