import React, {
  useReducer, useContext, createContext, ReactElement,
} from 'react';
import { ModalContextInterface, State, Action } from './types';

export const ModalContext = createContext<ModalContextInterface | null>(null);
export const ACTION_SHOW_MODAL = 'ACTION_SHOW_MODAL';
export const ACTION_HIDE_MODAL = 'ACTION_HIDE_MODAL';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_SHOW_MODAL:
      return {
        modals: [...state.modals, action.modal],
      };
    case ACTION_HIDE_MODAL:
      return {
        modals: state.modals.filter(
          (modal) => modal.props.id !== action.id,
        ),
      };
    default:
      throw new Error();
  }
};

const ModalDisplay = (): ReactElement => {
  const { state } = useContext(ModalContext) || { modals: [] };

  return (
    <div>
      {state?.modals.map((modal) => (
        <React.Fragment key={modal.props.id}>
          {modal}
        </React.Fragment>
      ))}
    </div>
  );
};

export const ModalContextProvider: React.FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    modals: [],
  });

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      <ModalDisplay />
      {props.children}
    </ModalContext.Provider>
  );
};

export function useModalActions(): {showModal: Function; hideModal: Function} {
  const { dispatch } = useContext(ModalContext) || { dispatch: null };
  if (!dispatch) {
    throw Error('Something went wrong using the ModalContext');
  }
  const hideModal = (id: string): void => dispatch({ type: ACTION_HIDE_MODAL, id });
  const showModal = (modal: ReactElement): void => dispatch({ type: ACTION_SHOW_MODAL, modal });

  return { showModal, hideModal };
}
