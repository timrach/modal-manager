import React, { useReducer, useContext, createContext } from "react";

export const ModalContext = createContext();
export const ACTION_SHOW_MODAL = 'ACTION_SHOW_MODAL';
export const ACTION_HIDE_MODAL = 'ACTION_HIDE_MODAL';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_SHOW_MODAL:
      return {
        modals: [...state.modals, action.modal]
      };
    case ACTION_HIDE_MODAL:
      return {
        modals: state.modals.filter(
          modal => modal.props.id !== action.id
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
        {state.modals.map((modal) => 
          <React.Fragment key={modal.props.id}>
          {modal}
          </React.Fragment>
          )}
    </div>
  );
}

export const ModalContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, {
    modals: []
  });

  return (
    <ModalContext.Provider value={{state, dispatch}}>
      <ModalDisplay/>
      {props.children}
    </ModalContext.Provider>
  );
};

export function useModalActions() {
  const {dispatch} = useContext(ModalContext);    
  const hideModal = (id)=> dispatch({ type: ACTION_HIDE_MODAL, id});
  const showModal = (modal)=> dispatch({ type: ACTION_SHOW_MODAL, modal});

  return [showModal, hideModal];
}