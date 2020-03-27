export type ModalProps = {
    id: string;
    style?: Record<string, any>;
    children?: React.ReactNode;
  }

export type Action =
 | { type: 'ACTION_SHOW_MODAL'; modal: React.ReactElement }
 | { type: 'ACTION_HIDE_MODAL'; id: string };

export interface State {modals: React.ReactElement[]}

export interface ModalContextInterface {
  state: State;
  dispatch: React.Dispatch<Action>;
}
